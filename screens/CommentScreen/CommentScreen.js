import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Comment from "../../components/Comment/Comment";
import Header2 from "../../components/Header2/Header2";
import styles from "./styles";
import userData from "../../data/userData";

const CommentScreen = ({ navigation, route }) => {
  const { comments } = route.params;

  const [commentSet, setCommentSet] = useState([]);
  const [commentInputValue, setCommentInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    setCommentSet(comments);
  }, [comments]);

  const handleCommentAdd = () => {
    setCommentSet([
      ...commentSet,
      {
        addedBy: userData.userName,
        profilePicture: userData.profilePicture,
        comment: commentInputValue,
      },
    ]);
    setCommentInputValue("");
  };

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} commentSectionActive={true} />
      <ScrollView>
        {commentSet.map(({ addedBy, comment, profilePicture, _uid }) => (
          <Comment
            key={_uid}
            profilePicture={profilePicture}
            addedBy={addedBy}
            comment={comment}
          />
        ))}
      </ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.commentAdder}>
          <Image
            style={styles.commentAdderMiniature}
            source={{ uri: userData.profilePicture }}
          />
          <View style={styles.commentAdderInputContainer}>
            <TextInput
              style={styles.commentAdderInput}
              placeholder={`Add a comment as ${userData.userName}...`}
              placeholderTextColor="#ccc"
              onChangeText={(text) => setCommentInputValue(text)}
              value={commentInputValue}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
            {inputFocus ? (
              <Pressable onPress={handleCommentAdd}>
                <Text style={styles.sendText}>Send</Text>
              </Pressable>
            ) : (
              <></>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommentScreen;
