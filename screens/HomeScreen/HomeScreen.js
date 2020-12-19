import React, { useState, useEffect } from "react";
import styles from "./styles";

// Components
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import Header from "../../components/Header/Header";
import Story from "../../components/Story/Story";

import userData from "../../helpers/dataManager";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../../components/Post/Post";

// Firebase
import db from "../../firebase";
import firebase from "firebase";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [commentsLength, setCommentsLength] = useState(0);

  useEffect(() => {
    db.collection("userData")
      .doc("posts")
      .collection("posts")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  useEffect(() => {
    db.collection("posts")
      .doc("5nKKo8KOVDRgcmk25JLP")
      .collection("comments")
      .get()
      .then((snap) => setCommentsLength(snap.size));
  }, [posts]);

  useEffect(() => {
    console.log(commentsLength);
  }, [commentsLength]);

  return (
    <SafeAreaView style={styles.body}>
      <Header headerIcon={true} accountSwitcher={false} iconSet="Home" />
      <ScrollView>
        <View style={styles.stories}>
          <Story />
          <Story />
          <Story />
        </View>
        {posts.map((post) => {
          return (
            <Post
              key={post._uid}
              profilePicture={post.profilePicture}
              userName={post.userName}
              likes={post.likes}
              views={post.views}
              description={post.description}
              miniatureUri={post.miniatureUri}
              comments={post.comments}
              commentsLength={commentsLength}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
