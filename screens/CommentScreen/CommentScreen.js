import React, { useEffect, useState, useRef } from "react";
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
import user from "../../helpers/dataManager";
import db from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const CommentScreen = ({ navigation, route }) => {
  const { comments, commentInputActive } = route.params;

  const user = useSelector(selectUser);

  const [commentSet, setCommentSet] = useState([]);
  const [commentInputValue, setCommentInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  const commentInput = useRef(null);

  const handleCommentAdd = () => {
    setCommentSet([
      ...commentSet,
      {
        addedBy: user.userName,
        profilePicture: user.profilePicture,
        comment: commentInputValue,
      },
    ]);
    setCommentInputValue("");
  };

  useEffect(() => {
    commentInput.current.focus();
  }, [commentInputActive]);

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} activeSection='CommentScreen' />
      <ScrollView indicatorStyle="white">
        {comments && comments.map(({ addedBy, comment, profilePicture, _uid }) => (
          <Comment
            key={_uid}
            profilePicture={profilePicture}
            addedBy={addedBy}
            comment={comment}
          />
        ))}
      </ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.commentAdder}>
          <Image
            style={styles.commentAdderMiniature}
            source={{ uri: user.profilePicture }}
          />
          <View style={styles.commentAdderInputContainer}>
            <TextInput
              ref={commentInput}
              keyboardAppearance='dark'
              style={styles.commentAdderInput}
              placeholder={`Add a comment as ${user.userName}...`}
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
