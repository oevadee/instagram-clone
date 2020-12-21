import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfileScreen from "./UserProfileScreen/UserProfileScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import PreviewImage from "./PreviewImage/PreviewImage";

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="PreviewImage" component={PreviewImage} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
