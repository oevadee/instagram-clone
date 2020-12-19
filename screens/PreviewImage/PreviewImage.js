import React from "react";
import styles from "./styles";

// Components
import { SafeAreaView, ScrollView } from "react-native";
import Post from "../../components/Post/Post";
import Header2 from "../../components/Header2/Header2";

const PreviewImage = ({ navigation, route }) => {
  const { uri, likes, views, description, user, comments } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} />
      <ScrollView>
        <Post
          navigation={navigation}
          miniatureUri={uri}
          likes={likes}
          views={views}
          description={description}
          comments={comments}
          user={user}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewImage;
