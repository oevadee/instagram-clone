import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackScreen";

// Screens
import { ExploreScreen, StoreScreen } from "./mainStackScreens";
import AddImage from "./AddImage/AddImage";

// Stack Screens
import ProfileStackScreen from "./ProfileStackScreen";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import AddImageStackScreen from "./AddImageStackScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabScreen = () => {
  return (
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
          borderTopColor: "#101010",
        },
        showLabel: false,
      }}
      initialRouteName="AddImage"
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="AddImage" component={AddImageStackScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
