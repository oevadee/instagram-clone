import React from "react";
import styles from "./styles";
import { StyleSheet, Text, View, Image } from "react-native";

import userData from "../../data/userData";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

const Post = ({ userName, likes, description, miniatureUri }) => {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderUser}>
          <Image
            style={styles.postHeaderUserImage}
            source={userData.profilePicture}
          />
          <Text style={styles.postHeaderUserText}>{userName}</Text>
        </View>
        <Ionicons name="ios-more" size={22} color="#fff" />
      </View>
      <View style={styles.postImageContainer}>
        <Image
          style={styles.postImage}
          source={miniatureUri}
        />
      </View>
      <View style={styles.postUtils}>
        <View style={styles.postUtilsLeft}>
          <Ionicons name="ios-heart" size={26} color="#fff" />
          <Ionicons name="ios-chatbubbles" size={26} color="#fff" />
          <Ionicons name="md-paper-plane" size={26} color="#fff" />
        </View>
        <View style={styles.postUtilsRight}>
          <Ionicons name="ios-bookmark" size={26} color="#fff" />
        </View>
      </View>
      <View style={styles.postTags}>
        <Text style={styles.postTagsLikes}>{likes} likes</Text>
        <Text style={styles.postTagsDescription}>
          <Text style={styles.postTagsUsername}>{userData.userName}</Text>{" "}
          <Text style={{ color: "#fff" }}>{description}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Post;
