import React from "react";
import styles from "./styles";

// Components
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import Header from "../../components/Header/Header";
import Story from "../../components/Story/Story";

import userData from "../../helpers/dataManager";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../../components/Post/Post";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <Header headerIcon={true} accountSwitcher={false} iconSet="Home" />
      <ScrollView>
        <View style={styles.stories}>
          <Story />
          <Story />
          <Story />
        </View>
        {userData.userPosts.map((post) => (
          <Post
            key={post._uid}
            user={post.user}
            likes={post.likes}
            description={post.description}
            miniatureUri={post.miniatureUri}
            comments={post.comments}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
