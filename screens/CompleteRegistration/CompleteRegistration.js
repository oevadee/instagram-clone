import React, { useState } from "react";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import db, { auth } from "../../firebase";
import styles from "./styles";

const CompleteRegistration = ({ navigation, route }) => {
  const [name, setName] = useState("");

  const { email, password } = route.params;

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
              userName: "",
              website: "",
              profilePicture:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Finstastatistics.com%2F&psig=AOvVaw0wdP2VhPEWUchMA-4_WsT2&ust=1608578232540000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiCsYWj3e0CFQAAAAAdAAAAABAD",
              userId: user.user.uid,
            });
        })
        .catch((err) => alert(err.message));
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.emailContainer}>
        <Text style={styles.header}>Tell us more about You</Text>
        <View style={styles.emailChooser}>
          <Text style={styles.emailChooserText}>Your Name</Text>
        </View>
        <TextInput
          style={styles.registerInput}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="What's Your name?"
          placeholderTextColor="rgb(123, 123, 123)"
          keyboardAppearance="dark"
        />
        <TextInput
          style={[styles.registerInput, styles.passwordInputOption]}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor="rgb(123, 123, 123)"
          keyboardAppearance="dark"
        />
        <Pressable
          style={
            email !== "" && password !== ""
              ? [styles.nextButton, styles.activeNextButton]
              : styles.nextButton
          }
          onPress={handleRegistration}
        >
          <Text
            style={
              email !== "" && password !== ""
                ? [styles.nextButtonText, styles.activeNextButtonText]
                : styles.nextButtonText
            }
          >
            Register
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default CompleteRegistration;
