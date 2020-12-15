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
import userData from "../../data/userData";
import { ScrollView } from "react-native-gesture-handler";
import PreviewImage from "../PreviewImage/PreviewImage";

const ProfileScreen = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);

  const handleLinkPress = () => {
    Linking.openURL("https://www.instagram.com/prorzeczy/");
  };

  return (
    <SafeAreaView style={styles.body}>
      <Header
        headerText={userData.userName}
        accountSwitcher={true}
        iconSet="Profile"
      />
      <ScrollView>
        <View style={styles.stats}>
          <Image style={styles.statsLogo} source={userData.profilePicture} />
          <View style={styles.statsCount}>
            <Text style={styles.statsCountNumber}>{userData.posts}</Text>
            <Text style={styles.statsCountName}>Post</Text>
          </View>
          <View style={styles.statsCount}>
            <Text style={styles.statsCountNumber}>{userData.followers}</Text>
            <Text style={styles.statsCountName}>Followers</Text>
          </View>
          <View style={styles.statsCount}>
            <Text style={styles.statsCountNumber}>{userData.following}</Text>
            <Text style={styles.statsCountName}>Following</Text>
          </View>
        </View>
        <View style={styles.bio}>
          <Text style={styles.bioName}>{userData.name}</Text>
          <Text style={styles.bioDescription}>
            {userData.bio}{" "}
            <Text onPress={handleLinkPress}>{userData.website}</Text>
          </Text>
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
        </View>
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
                    navigation: navigation
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
