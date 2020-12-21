import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

// Firebase
import db from "../../firebase";
import firebase from "firebase";

const CreateFeed = () => {
  const [usersSize, setUsersSize] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    db.collection("userData").onSnapshot((snapshot) => {
      setUsersSize(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    console.log(typeof usersSize, usersSize);
  }, [usersSize]);

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Text style={{ color: "#fff" }}>Testin</Text>
    </View>
  );
};

export default CreateFeed;
