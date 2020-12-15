import React from "react";
import styles from "./styles";

// Components
import { Button, SafeAreaView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Data
import userData from "../../data/userData";

const PreviewImage = ({ navigation, route }) => {
  const { miniatureUri, likes, description, user } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Ionicons onPress={() => navigation.goBack()} style={styles.goBackIcon} name="ios-arrow-back" size={34} color="#fff" />
        <View style={styles.headerInfo}>
          <Text style={styles.headerInfoUser}>{userData.userName}</Text>
          <Text style={styles.headerInfoPosts}>Posts</Text>
        </View>
      </View>
      <Post miniatureUri={miniatureUri} likes={likes} description={description} user={user} />
    </SafeAreaView>
  );
};

export default PreviewImage;
