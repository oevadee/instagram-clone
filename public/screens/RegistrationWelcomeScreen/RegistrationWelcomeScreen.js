import React from "react";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import styles from "./styles";

const RegistrationWelcomeScreen = ({ navigation, route }) => {
  const { email, password, name } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.header}>Welcome to Instagram {name}</Text>
        <Text style={styles.nameText}>
          Add your name so friends can find you.
        </Text>
        <Pressable
          onPress={() => navigation.push('RegistrationSetUsername', {
            email: email,
            password: password,
            name: name
          })}
        >
          <Text
            style={[styles.nextButtonText, styles.activeNextButtonText]}
          >
            Change Username
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationWelcomeScreen;
