import React, { useState } from "react";
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

const ProfileScreen = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <SafeAreaView style={styles.body}>
      <Header
        headerText={userData.userName}
        accountSwitcher={true}
        iconSet="Profile"
      />
      <ScrollView>
        <ProfileInfo
          profilePicture={userData.profilePicture}
          posts={userData.posts}
          followers={userData.followers}
          following={userData.following}
          name={userData.name}
          bio={userData.bio}
          website={userData.website}
        />
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
            {userData.userPosts.map((post) => (
              <Miniature
                onPress={() =>
                  navigation.push("PreviewImage", {
                    uri: post.uri,
                    likes: post.likes,
                    description: post.description,
                    comments: post.comments,
                    user: post.user,
                    navigation: navigation,
                  })
                }
                key={post._uid}
                imageUri={post.miniatureUri}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
