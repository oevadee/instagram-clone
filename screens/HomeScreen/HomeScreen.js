import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }, styles.body]}>
      <Text>TeLS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212'
  }
})

export default HomeScreen;
