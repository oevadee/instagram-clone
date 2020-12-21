import React, { useState } from "react";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

const RegistrationAddName = ({ navigation, route }) => {
  const [name, setName] = useState("");

  const { email, password } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.emailContainer}>
        <Text style={styles.header}>Add Your Name</Text>
        <Text style={styles.nameText}>
          Add your name so friends can find you.
        </Text>
        <TextInput
          style={styles.registerInput}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Full name"
          placeholderTextColor="rgb(123, 123, 123)"
          keyboardAppearance="dark"
        />
        <Pressable
          style={
            email !== "" && password !== ""
              ? [styles.nextButton, styles.activeNextButton]
              : styles.nextButton
          }
          onPress={() => navigation.navigate('RegistrationWelcomeScreen', {
            email: email,
            password: password,
            name: name
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

export default RegistrationAddName;
