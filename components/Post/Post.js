import React, { useState } from "react";
import styles from "./styles";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

const Post = ({
  user,
  likes,
  views,
  description,
  miniatureUri,
  comments = 0,
  profilePicture,
  userName,
  commentsLength
}) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderUser}>
          <Image
            style={styles.postHeaderUserImage}
            source={{ uri: profilePicture }}
          />
          <Pressable onPress={() => navigation.push("UserProfile")}>
            <Text style={styles.postHeaderUserText}>{userName}</Text>
          </Pressable>
        </View>
        <Ionicons name="ios-more" size={22} color="#fff" />
      </View>
      <View style={styles.postImageContainer}>
        <Image style={styles.postImage} source={{ uri: miniatureUri }} />
      </View>
      <View style={styles.postUtils}>
        <View style={styles.postUtilsLeft}>
          <Ionicons
            onPress={() => setLiked(!liked)}
            name="ios-heart"
            size={26}
            color={liked ? "rgb(253, 50, 73)" : "#fff"}
          />
          <Ionicons name="ios-chatbubbles" size={26} color="#fff" onPress={() => navigation.push("Comments", {
              comments: comments,
              commentInputActive: true,
            })} />
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
            {commentsLength === 1
              ? "1 comment"
              : `all ${commentsLength} comments`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Post;
