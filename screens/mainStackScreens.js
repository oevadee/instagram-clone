import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }, styles.body]}>
      <Text>Home Screen</Text>
      <Button
        title="Explore"
        onPress={() => {
          navigation.navigate("Explore");
        }}
      />
    </View>
  );
};

export const ExploreScreen = ({ navigation }) => {
  return (
    <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }, styles.body]}>
      <Text>Explore Screen</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export const AddImage = ({ navigation }) => {
  return (
    <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }, styles.body]}>
      <Text>Add Image</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export const StoreScreen = ({ navigation }) => {
  return (
    <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }, styles.body]}>
      <Text>Store Screen</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212'
  }
})