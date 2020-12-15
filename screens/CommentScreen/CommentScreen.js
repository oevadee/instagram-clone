import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Comment from "../../components/Comment/Comment";
import Header2 from "../../components/Header2/Header2";
import styles from "./styles";

const CommentScreen = ({ navigation, route }) => {
  const { comments } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} />
      <ScrollView>
        {comments.map(({ addedBy, comment, profilePicture }) => (
          <Comment profilePicture={profilePicture} addedBy={addedBy} comment={comment} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommentScreen;
