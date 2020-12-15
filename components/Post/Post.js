import React, { useState } from "react";
import styles from "./styles";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import userData from "../../data/userData";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

const Post = ({ user, likes, description, miniatureUri, comments, navigation }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderUser}>
          <Image
            style={styles.postHeaderUserImage}
            source={user.profilePicture}
          />
          <Text style={styles.postHeaderUserText}>{user.userName}</Text>
        </View>
        <Ionicons name="ios-more" size={22} color="#fff" />
      </View>
      <View style={styles.postImageContainer}>
        <Image style={styles.postImage} source={miniatureUri} />
      </View>
      <View style={styles.postUtils}>
        <View style={styles.postUtilsLeft}>
          <Ionicons
            onPress={() => setLiked(!liked)}
            name="ios-heart"
            size={26}
            color={liked ? "rgb(253, 50, 73)" : "#fff"}
          />
          <Ionicons name="ios-chatbubbles" size={26} color="#fff" />
          <Ionicons name="md-paper-plane" size={26} color="#fff" />
        </View>
        <View style={styles.postUtilsRight}>
          <Ionicons name="ios-bookmark" size={26} color="#fff" />
        </View>
      </View>
      <View style={styles.postTags}>
        <Text style={styles.postTagsLikes}>
          {liked ? likes + 1 : likes} likes
        </Text>
        <View style={styles.postTagsDescription}>
          <Text style={styles.postTagsUsername}>
            {user.userName}
            {"  "}
          </Text>
          <Text style={{ color: "#fff" }}>{description}</Text>
        </View>
        <Pressable onPress={() => navigation.push("Comments", {
          comments: comments
        })}>
          <Text style={styles.commentsButton}>View all 2 comments</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Post;
