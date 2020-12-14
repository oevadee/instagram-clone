import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import {
  ExploreScreen,
  AddImage,
  StoreScreen,
} from "./screens/mainStackScreens";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const Tab = createBottomTabNavigator();

const app = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle="light-content" />
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
            inactiveTintColor: "#rgb(132,132,132)",
            style: {
              backgroundColor: "#010101",
              borderTopColor: '#101010'
            },
            showLabel: false,
          }}
          initialRouteName="HomeScreen"
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
