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
import db from "../../firebase";

// Data
import currentUser from "../../helpers/dataManager";

const ProfileScreen = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    db.collection("userData")
      .doc("users")
      .collection("users")
      .doc(currentUser)
      .get()
      .then((snap) => {
        setUser(snap.data());
      });
    db.collection("userData")
      .doc("users")
      .collection("users")
      .doc(currentUser)
      .collection("userPosts")
      .onSnapshot(snap => {
        setUserPosts(snap.docs.map(doc => doc.data()))
      })
  }, [currentUser]);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
        {user && (
          <ProfileInfo
            profilePicture={user.profilePicture}
            posts={user.posts}
            followers={user.followers}
            following={user.following}
            name={user.name}
            bio={user.bio}
            website={user.website}
          />
        )}
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
                      uri: post.uri,
                      likes: post.likes,
                      views: post.views,
                      description: post.description,
                      _uid: post._uid,
                      userName: post.userName,
                      profilePicture: post.profilePicture,
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
