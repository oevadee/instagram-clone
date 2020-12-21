import React, { useState } from "react";
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

import { auth } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    auth
      .signInWithEmailAndPassword(login, password)
      .catch((err) => alert(err.message));
    setLogin("");
    setPassword("");
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.body} behavior="padding">
        <Image
          style={styles.loginLogo}
          source={require("../../images/Instagram-Logo.png")}
        />
        <TextInput
          style={styles.loginInput}
          value={login}
          onChangeText={(text) => setLogin(text)}
          placeholder="Phone number, username or email"
          placeholderTextColor="rgb(123, 123, 123)"
          keyboardAppearance="dark"
        />
        <TextInput
          style={[styles.loginInput, styles.passwordInputOption]}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor="rgb(123, 123, 123)"
          keyboardAppearance="dark"
        />
        <Pressable style={styles.loginForgotContainer}>
          <Text style={styles.loginForgot}>Fortgot password?</Text>
        </Pressable>
        <Pressable style={styles.loginButton} onPress={loginUser}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>
      </KeyboardAvoidingView>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <Pressable
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Sign Up.</Text>
        </Pressable>
      </View>
    </>
  );
};

export default LoginScreen;
