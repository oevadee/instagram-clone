import React from "react";
import PreviewImage from "./PreviewImage/PreviewImage";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfileScreen from "./UserProfileScreen/UserProfileScreen";

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
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackScreen;
