import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  ExploreScreen,
  HomeScreen,
  AddImage,
  StoreScreen,
} from "./screens/mainStackScreens";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const app = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size = 32 }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home";
              } else if (route.name === "Explore") {
                iconName = focused ? "ios-search" : "ios-search";
              } else if (route.name === "AddImage") {
                iconName = focused ? "ios-add" : "ios-add";
                size = 48;
              } else if (route.name === "Store") {
                iconName = focused ? "ios-cart" : "ios-cart";
              } else if (route.name === "Profile") {
                iconName = focused ? "ios-person" : "ios-person";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#f5f5f5",
            inactiveTintColor: "#d5d5d5",
            style: {
              backgroundColor: "#121212",
              borderTopColor: "transparent",
            },
            showLabel: false
          }}
          initialRouteName='Profile'
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
          <Tab.Screen name="AddImage" component={AddImage} />
          <Tab.Screen name="Store" component={StoreScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default app;
