import React, { useState, useEffect } from "react";
import styles from "./styles";

// Components
import { SafeAreaView, ScrollView } from "react-native";
import Post from "../../components/Post/Post";
import Header2 from "../../components/Header2/Header2";
import db from "../../firebase";

const PreviewImage = ({ navigation, route }) => {
  const [postInfo, setPostInfo] = useState(null);
  const { userName_uid, post_uid } = route.params;

  useEffect(() => {
    userName_uid &&
      db
        .collection("userData")
        .doc("users")
        .collection("users")
        .doc(userName_uid)
        .collection("userPosts")
        .doc(post_uid)
        .get()
        .then((snap) => setPostInfo(snap.data()));
  }, [userName_uid]);

  useEffect(() => {
    console.log("userName_uid --- ", userName_uid);
  }, [userName_uid]);

  useEffect(() => {
    console.log("postInfo --- ", postInfo);
  }, [postInfo]);

  return (
    <SafeAreaView style={styles.body}>
      <Header2 activeSection='PreviewImage' />
      <ScrollView>
        {postInfo && (
          <Post
            _uid={postInfo._uid}
            uri={postInfo.uri}
            likes={postInfo.likes}
            views={postInfo.views}
            description={postInfo.description}
            userName={postInfo.userName}
            profilePicture={postInfo.profilePicture}
            userName_uid={userName_uid}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewImage;
