import React from "react";
import styles from "./styles";

// Components
import { SafeAreaView, ScrollView } from "react-native";
import Post from "../../components/Post/Post";
import Header2 from "../../components/Header2/Header2";

const PreviewImage = ({ navigation, route }) => {
  const { _uid, uri, likes, views, description, userName, profilePicture } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <Header2 navigation={navigation} />
      <ScrollView>
        <Post
          _uid={_uid}
          navigation={navigation}
          uri={uri}
          likes={likes}
          views={views}
          description={description}
          userName={userName}
          profilePicture={profilePicture}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewImage;
