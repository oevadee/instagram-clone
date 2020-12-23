import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddImage from "./AddImage/AddImage";
import AddImage2 from "./AddImage2/AddImage2";

const Stack = createStackNavigator();

const AddImageStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddImage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddImage" component={AddImage} />
      <Stack.Screen name="AddImage2" component={AddImage2} />
    </Stack.Navigator>
  );
};

export default AddImageStackScreen;
