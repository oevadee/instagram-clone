import React, { useState, useEffect } from "react";
import styles from "./styles";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header2 from "../../components/Header2/Header2";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Miniature from "../../components/Miniature/Miniature";

// Firebase
import db from "../../firebase";

const UserProfileScreen = ({ navigation, route }) => {
  const [userParams, setUserParams] = useState(null);
  const [posts, setPosts] = useState(null);
  const { userName_uid } = route.params;

  useEffect(() => {
    if (userName_uid !== undefined) {
      db.collection("userData")
        .doc("users")
        .collection("users")
        .doc(userName_uid)
        .get()
        .then((snap) => setUserParams(snap.data()));
      db.collection("userData")
        .doc("users")
        .collection("users")
        .doc(userName_uid)
        .collection("userPosts")
        .onSnapshot((snap) => setPosts(snap.docs.map((doc) => doc.data())));
    }
    console.log("userName_uid -- ", userName_uid);
  }, [userName_uid]);

  useEffect(() => {
    console.log("posts -- ", posts);
  }, [posts]);

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} />
      <ScrollView>
        {userParams && (
          <ProfileInfo
            profilePicture={userParams.profilePicture}
            posts={userParams.posts}
            followers={userParams.followers}
            following={userParams.following}
            name={userParams.name}
            bio={userParams.bio}
            website={userParams.website}
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
            {posts &&
              posts.map((post) => (
                <Miniature
                  onPress={() =>
                    navigation.push("PreviewImage", {
                      uri: post.uri,
                      likes: post.likes,
                      description: post.description,
                      comments: post.comments,
                      userName: post.userName,
                      _uid: post._uid,
                      userName_uid: userName_uid,
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

export default UserProfileScreen;
