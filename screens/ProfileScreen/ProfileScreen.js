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

const ProfileScreen = () => {
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
            <Text style={styles.statsCountNumber}>134</Text>
            <Text style={styles.statsCountName}>Post</Text>
          </View>
          <View style={styles.statsCount}>
            <Text style={styles.statsCountNumber}>966</Text>
            <Text style={styles.statsCountName}>Followers</Text>
          </View>
          <View style={styles.statsCount}>
            <Text style={styles.statsCountNumber}>494</Text>
            <Text style={styles.statsCountName}>Following</Text>
          </View>
        </View>
        <View style={styles.bio}>
          <Text style={styles.bioName}>♌️</Text>
          <Text style={styles.bioDescription}>
            20, asp faculty of design📍WWA{" "}
            <Text onPress={handleLinkPress}>@prorzeczy</Text>
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
              <Miniature key={post._uid} imageUri={post.miniatureUri} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
