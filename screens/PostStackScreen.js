import React from "react";
import PreviewImage from "./PreviewImage/PreviewImage";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PreviewImage" component={PreviewImage} />
    </Stack.Navigator>
  );
};

export default ProfileStackScreen;
