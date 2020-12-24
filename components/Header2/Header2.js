import React, { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

import db, { auth } from "../../firebase";

import { useUID, useUIDSeed } from 'react-uid';

const Header2 = ({ activeSection, image = null, description = null }) => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const _uid = useUID(); 

  useEffect(() => {
    db.collection("userData")
      .doc("users")
      .collection("users")
      .doc(auth.currentUser.uid)
      .onSnapshot((snap) => {
        console.log(snap.data())
        setUserData({
          userName: snap.data().userName,
          profilePicture: snap.data().profilePicture,
        });
      });
  }, [db, auth]);

  return (
    <View style={styles.header}>
      <Pressable
        style={styles.icon}
        onPress={() => {
          activeSection === "AddImage"
            ? navigation.navigate("Home")
            : navigation.goBack();
        }}
      >
        {activeSection === "AddImage" ? (
          <Ionicons name="ios-close" size={48} color="#fff" />
        ) : (
          <Ionicons name="ios-arrow-back" size={34} color="#fff" />
        )}
      </Pressable>
      <View style={styles.headerInfo}>
        {activeSection === "CommentScreen" ? (
          <Text style={styles.headerInfoPosts}>Comments</Text>
        ) : (
          <>
            {activeSection !== "AddScreen" && userData && (
              <Text style={styles.headerInfoUser}>{userData.userName}</Text>
            )}
            <Text style={styles.headerInfoPosts}>
              {activeSection === "AddImage" ? "New Post" : "Posts"}
            </Text>
          </>
        )}
      </View>
      {userData && image && (
        <Pressable
          style={styles.headerRight}
          onPress={() => {
            activeSection === "AddImage" &&
              navigation.navigate("AddImage2", {
                image: image,
              });
            if (activeSection === "AddImage2") {
              db.collection("userData")
                .doc("posts")
                .collection("posts")
                .doc(_uid)
                .set({
                  _uid: _uid,
                  uri: image,
                  description: description,
                  likes: 0,
                  userName: userData.userName,
                  profilePicture: userData.profilePicture,
                  userName_uid: auth.currentUser.uid,
                });
              setTimeout(() => {
                navigation.navigate("Home");
              }, 2000);
            }
          }}
        >
          <Text style={styles.headerRightText}>
            {activeSection === "AddImage" ? "Next" : "Share"}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default Header2;
