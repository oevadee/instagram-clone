import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen/LoginScreen";
import RegisterScreen from "./RegisterScreen/RegisterScreen";
import RegistrationAddName from "./RegistrationAddName/RegistrationAddName";
import RegistrationSetUsername from "./RegistrationSetUsername/RegistrationSetUsername";
import RegistrationWelcomeScreen from "./RegistrationWelcomeScreen/RegistrationWelcomeScreen";

const Stack = createStackNavigator();

const ProfileStackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="RegistrationAddName" component={RegistrationAddName} />
      <Stack.Screen name="RegistrationWelcomeScreen" component={RegistrationWelcomeScreen} />
      <Stack.Screen name="RegistrationSetUsername" component={RegistrationSetUsername} />
    </Stack.Navigator>
  );
};

export default ProfileStackScreens;
