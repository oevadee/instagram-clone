import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import CommentScreen from "./screens/CommentScreen/CommentScreen";
import HomeTabScreen from "./screens/HomeTabScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const app = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeTabScreen} />
          <Stack.Screen
            name="Comments"
            component={CommentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default app;
