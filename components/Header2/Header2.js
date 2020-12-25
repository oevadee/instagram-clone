import React, { useState, useEffect } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import styles from "./styles";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

import db, { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, update } from "../../features/userSlice";
import uuid from "react-native-uuid";

import firebase from "firebase";

const Header2 = ({
  activeSection,
  image = null,
  description = null,
  setImage,
}) => {
  const navigation = useNavigation();
  const _uid = uuid.v1();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(_uid);
  }, [_uid]);

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
            {activeSection !== "AddScreen" && user && (
              <Text style={styles.headerInfoUser}>{user.userName}</Text>
            )}
            <Text style={styles.headerInfoPosts}>
              {activeSection === "AddImage" ? "New Post" : "Posts"}
            </Text>
          </>
        )}
      </View>
      {user && image && setImage ? (
        <Pressable
          style={styles.headerRight}
          onPress={() => {
            activeSection === "AddImage" &&
              navigation.navigate("AddImage2", {
                image: image,
                setImage: setImage
              });
            if (activeSection === "AddImage2" && user) {
              db.collection("userData")
                .doc("posts")
                .collection("posts")
                .doc(_uid)
                .set({
                  _uid: _uid,
                  uri: image,
                  description: description,
                  likes: 0,
                  userName: user.userName,
                  profilePicture: user.profilePicture,
                  userName_uid: auth.currentUser.uid,
                });
              db.collection("userData")
                .doc("users")
                .collection("users")
                .doc(user.userId)
                .collection("userPosts")
                .doc(_uid)
                .set({
                  _uid: _uid,
                  uri: image,
                  description: description,
                  likes: 0,
                  userName: user.userName,
                  profilePicture: user.profilePicture,
                  userName_uid: user.userId,
                });
              db.collection("userData")
                .doc("users")
                .collection("users")
                .doc(user.userId)
                .update({
                  posts: firebase.firestore.FieldValue.increment(1),
                });
              setImage(null);
              setTimeout(() => {
                navigation.popToTop();
                navigation.navigate("Home");
              }, 2000);
            }
          }}
        >
          <Text style={styles.headerRightText}>
            {activeSection === "AddImage" ? "Next" : "Share"}
          </Text>
        </Pressable>
      ) : (
        <View style={styles.headerRight}></View>
      )}
    </View>
  );
};

export default Header2;
