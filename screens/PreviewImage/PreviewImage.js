import React from "react";
import styles from "./styles";

// Components
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Header2 from "../../components/Header2/Header2";

const PreviewImage = ({ navigation, route }) => {
  const { uri, likes, description, user, comments } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} />
      <ScrollView>
        <Post
          navigation={navigation}
          miniatureUri={uri}
          likes={likes}
          description={description}
          comments={comments}
          user={user}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewImage;
