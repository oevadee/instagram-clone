import React, { useState, useEffect } from "react";

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

// Firebase
import db, { auth } from "./firebase";

// Screens
import CommentScreen from "./screens/CommentScreen/CommentScreen";
import HomeTabScreen from "./screens/HomeTabScreen";
import CreateFeed from "./components/CreateFeed/CreateFeed";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        db.collection("userData")
          .doc("users")
          .collection("users")
          .doc(authUser.uid)
          .get()
          .then((snap) => dispatch(login({
            userId: snap.data().userId,
            userName: snap.data().userName,
            profilePicture: snap.data().profilePicture,
            posts: snap.data().posts,
            followers: snap.data().followers,
            following: snap.data().following,
            name: snap.data().name,
            bio: snap.data().bio,
            website: snap.data().website,
          })));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  // useEffect(() => {
  //   user && dispatch(login({

  //   }));
  // }, [user]);

  return (
    <>
      {user ? (
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
              <Stack.Screen name="Comments" component={CommentScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default App;
