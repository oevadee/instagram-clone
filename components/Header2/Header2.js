import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Data
import userData from "../../helpers/dataManager";

import db, { auth } from '../../firebase';

const Header2 = ({ activeSection, image = null, description = null }) => {
  const navigation = useNavigation();

  useEffect(() => {
    db.collection('userData')
  }, [])

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
            {activeSection !== "AddScreen" && (
              <Text style={styles.headerInfoUser}>{userData.userName}</Text>
            )}
            <Text style={styles.headerInfoPosts}>
              {activeSection === "AddImage" ? "New Post" : "Posts"}
            </Text>
          </>
        )}
      </View>
      <Pressable
        style={styles.headerRight}
        onPress={() => {
          activeSection === "AddImage" &&
            navigation.navigate("AddImage2", {
              image: image,
            });
            if (activeSection === "AddImage2") {
              const _uid = db.createId();
              db.collection('userData').doc('post').collection('post').doc(_uid).set({
                _uid: _uid,
                url: image,
                description: description,
                likes: 0,
                userName: 
                profilePicture:
                userName_uid: 
              })
              setTimeout(() => {
                navigation.navigate('Home')
              }, 2000);
            }
        }}
      >
        <Text style={styles.headerRightText}>{activeSection === "AddImage" ? 'Next' : 'Share'}</Text>
      </Pressable>
    </View>
  );
};

export default Header2;
