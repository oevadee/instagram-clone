import React, { useState, useEffect } from "react";
import styles from "./styles";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

import * as firebase from "firebase";
import db from "../../firebase";

import * as Haptics from "expo-haptics";

const Post = ({
  _uid,
  likes,
  views,
  description,
  uri,
  profilePicture,
  userName,
  userName_uid,
}) => {
  const [liked, setLiked] = useState(false);
  const [commentsSize, setCommentsSize] = useState(null);
  const [comments, setComments] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    db.collection("userData")
      .doc("posts")
      .collection("posts")
      .doc(_uid)
      .collection("comments")
      .onSnapshot((snap) => setCommentsSize(snap.size));
    db.collection("userData")
      .doc("posts")
      .collection("posts")
      .doc(_uid)
      .collection("comments")
      .onSnapshot((snap) => setComments(snap.docs.map((doc) => doc.data())));
    db.collection("userData")
      .doc("posts")
      .collection("posts")
      .doc(_uid)
      .get();
  }, [_uid]);

  useEffect(() => {
    console.log(userName_uid);
  }, [userName_uid]);

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderUser}>
          <Image
            style={styles.postHeaderUserImage}
            source={{ uri: profilePicture }}
          />
          <Pressable
            onPress={() =>
              navigation.push("UserProfile", {
                userName_uid: userName_uid,
                post_uid: _uid
              })
            }
          >
            <Text style={styles.postHeaderUserText}>{userName}</Text>
          </Pressable>
        </View>
        <Ionicons name="ios-more" size={22} color="#fff" />
      </View>
      <View style={styles.postImageContainer}>
        <Image style={styles.postImage} source={{ uri: uri }} />
      </View>
      <View style={styles.postUtils}>
        <View style={styles.postUtilsLeft}>
          <Ionicons
            onPress={() => {
              setLiked(!liked);
              Haptics.selectionAsync();
            }}
            name="ios-heart"
            size={26}
            color={liked ? "rgb(253, 50, 73)" : "#fff"}
          />
          <Ionicons
            name="ios-chatbubbles"
            size={26}
            color="#fff"
            onPress={() =>
              navigation.push("Comments", {
                comments: comments,
                commentInputActive: true,
              })
            }
          />
          <Ionicons name="md-paper-plane" size={26} color="#fff" />
        </View>
        <View style={styles.postUtilsRight}>
          <Ionicons name="ios-bookmark" size={26} color="#fff" />
        </View>
      </View>
      <View style={styles.postTags}>
        {likes ? (
          <Text style={styles.postTagsLikes}>
            {liked ? parseInt(likes) + 1 : parseInt(likes)} likes
          </Text>
        ) : (
          <Text style={styles.postTagsLikes}>{views} views</Text>
        )}
        <View style={styles.postTagsDescription}>
          <Text style={styles.postTagsUsername}>
            {userName}
            {"  "}
          </Text>
          <Text style={{ color: "#fff" }}>{description}</Text>
        </View>
        <Pressable
          onPress={() =>
            navigation.push("Comments", {
              comments: comments,
            })
          }
        >
          <Text style={styles.commentsButton}>
            View{" "}
            {comments && commentsSize === 1
              ? "1 comment"
              : `all ${commentsSize} comments`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Post;
