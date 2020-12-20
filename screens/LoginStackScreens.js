import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen/LoginScreen";
import RegisterScreen from "./RegisterScreen/RegisterScreen";
import CompleteRegistration from "./CompleteRegistration/CompleteRegistration";

const Stack = createStackNavigator();

const ProfileStackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Complete Registration" component={CompleteRegistration} />
    </Stack.Navigator>
  );
};

export default ProfileStackScreens;
