import React, { useState, useEffect } from "react";
import styles from "./styles";

// Components
import { Text, View, SafeAreaView, Image, Pressable } from "react-native";
import Miniature from "../../components/Miniature/Miniature";
import Header from "../../components/Header/Header";
import * as Linking from "expo-linking";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Data
import userData from "../../helpers/dataManager";
import { ScrollView } from "react-native-gesture-handler";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

// Firebase
import * as firebase from "firebase";
import db, { auth } from "../../firebase";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const ProfileScreen = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const user = useSelector(selectUser);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    user &&
      db
        .collection("userData")
        .doc("users")
        .collection("users")
        .doc(user.userId)
        .collection("userPosts")
        .onSnapshot((snap) => {
          setUserPosts(snap.docs.map((doc) => doc.data()));
        });
  }, [user]);

  useEffect(() => {
    console.log(userPosts);
  }, [userPosts]);

  return (
    <SafeAreaView style={styles.body}>
      {user && (
        <Header
          headerText={user.userName}
          accountSwitcher={true}
          iconSet="Profile"
        />
      )}
      <ScrollView>
        {user && <ProfileInfo userName_uid={auth.currentUser.uid} />}
        <Pressable
          onPress={() => setPressed(!pressed)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#222" : "transparent",
            },
            styles.bioButton,
          ]}
        >
          <Text style={styles.bioButtonText}>Edit Profile</Text>
        </Pressable>
        <View style={styles.gallery}>
          <View style={styles.galleryViewChooser}>
            <View style={styles.galleryViewChooserCategory}>
              <Ionicons name="md-grid" size={30} color="#fff" />
            </View>
            <View style={styles.galleryViewChooserCategory}>
              <Ionicons name="ios-contact" size={30} color="rgb(132,132,132)" />
            </View>
          </View>
          <View style={styles.galleryView}>
            {userPosts &&
              userPosts.map((post) => (
                <Miniature
                  onPress={() =>
                    navigation.push("PreviewImage", {
                      userName_uid: auth.currentUser.uid,
                      post_uid: post._uid
                    })
                  }
                  key={post._uid}
                  imageUri={post.uri}
                />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
