import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.body} behavior="padding">
      <Image
        style={styles.loginLogo}
        source={require("../../images/Instagram-Logo.png")}
      />
      <TextInput
        style={styles.loginInput}
        placeholder="Phone number, username or email"
        placeholderTextColor="rgb(123, 123, 123)"
        keyboardAppearance='dark'
      />
      <TextInput
        style={[styles.loginInput, styles.passwordInputOption]}
        placeholder="Password"
        placeholderTextColor="rgb(123, 123, 123)"
        keyboardAppearance='dark'
      />
      <Pressable style={styles.loginForgotContainer}>
        <Text style={styles.loginForgot}>Fortgot password?</Text>
      </Pressable>
      <Pressable style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
