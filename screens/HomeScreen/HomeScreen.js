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
} from "react-native";
import Header from "../../components/Header/Header";
import Story from "../../components/Story/Story";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

import userData from "../../data/userData";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../../components/Post/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Header headerIcon={true} accountSwitcher={false} iconSet="Home" />
      <ScrollView>
        <View style={styles.stories}>
          <Story />
          <Story />
          <Story />
        </View>
        {userData.userPosts.map(post => <Post userName={userData.userName} likes={post.likes} description={post.description} miniatureUri={post.miniatureUri} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
