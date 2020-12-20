import React, { useState } from "react";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import db, { auth } from "../../firebase";
import styles from "./styles";

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.emailContainer}>
        <Text style={styles.header}>Enter Email and Password</Text>
        <View style={styles.emailChooser}>
          <Text style={styles.emailChooserText}>Email</Text>
        </View>
        <TextInput
          style={styles.registerInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email adress"
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
          onPress={() => navigation.navigate('Complete Registration', {
            email: email,
            password: password
          })}
        >
          <Text
            style={
              email !== "" && password !== ""
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

export default RegisterScreen;
