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
import userData from "../../helpers/dataManager";
import db from "../../firebase";

const CommentScreen = ({ navigation, route }) => {
  const { _uid, commentInputActive } = route.params;

  const [commentSet, setCommentSet] = useState([]);
  const [commentInputValue, setCommentInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  const commentInput = useRef(null);

  useEffect(() => {
    db.collection("userData")
      .doc("posts")
      .collection("posts")
      .doc(_uid)
      .collection("comments")
      .onSnapshot((snap) => setCommentSet(snap.docs.map((doc) => doc.data())));
  }, [_uid]);

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

  useEffect(() => {
    commentInput.current.focus();
  }, [commentInputActive]);

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} commentSectionActive={true} />
      <ScrollView indicatorStyle="white">
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
              ref={commentInput}
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
