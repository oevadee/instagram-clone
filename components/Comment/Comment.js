import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const Comment = ({ addedBy, comment, profilePicture }) => {
  return (
    <View style={styles.commentContainer}>
      <Image
        style={styles.commentImage}
        source={{ uri: profilePicture }}
      />
      <View style={styles.commentTexts}>
        <Text style={styles.commentTextsUser}>{addedBy} </Text>
        <Text style={styles.commentTextsComment}>{comment}</Text>
      </View>
    </View>
  );
};

export default Comment;
