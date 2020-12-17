import React from "react";
import styles from './styles'
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header2 from '../../components/Header2/Header2';

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Miniature from "../../components/Miniature/Miniature";

// Data
import userData from "../../helpers/dataManager";

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Header2 />
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

export default UserProfileScreen;
