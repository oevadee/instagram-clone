import React from "react";
import styles from "./styles";

// Components
import { Button, SafeAreaView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Header2 from '../../components/Header2/Header2';

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Data
import userData from "../../data/userData";

const PreviewImage = ({ navigation, route }) => {
  const { uri, likes, description, user, comments } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} />
      <Post navigation={navigation} miniatureUri={uri} likes={likes} description={description} comments={comments} user={user} />
    </SafeAreaView>
  );
};

export default PreviewImage;
