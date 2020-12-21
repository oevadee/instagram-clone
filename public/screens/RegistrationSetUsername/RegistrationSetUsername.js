import React, { useState } from "react";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import db, { auth } from "../../firebase";
import styles from "./styles";

const RegistrationSetUsername = ({ navigation, route }) => {
  const [userName, setUserName] = useState("");

  const { email, password, name } = route.params;

  const handleRegistration = () => {
    email !== "" &&
      password !== "" &&
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user.user);
          db.collection("userData")
            .doc("users")
            .collection("users")
            .doc(user.user.uid)
            .set({
              followers: 0,
              following: 0,
              posts: 0,
              bio: "",
              name: name,
              userName: userName,
              website: "",
              profilePicture:
                "https://instagram.fadb2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ad=z-m&_nc_ht=instagram.fadb2-1.fna.fbcdn.net&_nc_ohc=L111VlxDSxEAX_KJuky&oh=ee28bc6a526f59a17bf7b877301faf76&oe=6008E38F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
              userId: user.user.uid,
            });
        })
        .catch((err) => alert(err.message));
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.emailContainer}>
        <Text style={styles.header}>Change Username</Text>
        <Text style={styles.nameText}>
          Pick a username for your account. You can always change it later.
        </Text>
        <TextInput
          style={styles.registerInput}
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholder="Username"
          placeholderTextColor="rgb(123, 123, 123)"
          keyboardAppearance="dark"
        />
        <Pressable
          style={
            userName !== ""
              ? [styles.nextButton, styles.activeNextButton]
              : styles.nextButton
          }
          onPress={handleRegistration}
        >
          <Text
            style={
              userName !== ""
                ? [styles.nextButtonText, styles.activeNextButtonText]
                : styles.nextButtonText
            }
          >
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationSetUsername;
