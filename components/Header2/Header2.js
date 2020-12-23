import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Data
import userData from "../../helpers/dataManager";

const Header2 = ({ activeSection, image = null }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable
        style={styles.icon}
        onPress={() => {
          activeSection === "AddImage"
            ? navigation.navigate("Home")
            : navigation.goBack();
        }}
      >
        {activeSection === "AddImage" ? (
          <Ionicons name="ios-close" size={48} color="#fff" />
        ) : (
          <Ionicons name="ios-arrow-back" size={34} color="#fff" />
        )}
      </Pressable>
      <View style={styles.headerInfo}>
        {activeSection === "CommentScreen" ? (
          <Text style={styles.headerInfoPosts}>Comments</Text>
        ) : (
          <>
            {activeSection !== "AddScreen" && (
              <Text style={styles.headerInfoUser}>{userData.userName}</Text>
            )}
            <Text style={styles.headerInfoPosts}>
              {activeSection === "AddImage" ? "New Post" : "Posts"}
            </Text>
          </>
        )}
      </View>
      <Pressable
        style={styles.headerRight}
        onPress={() => {
          activeSection === "AddImage" &&
            navigation.navigate("AddImage2", {
              image: image,
            });
        }}
      >
        <Text style={styles.headerRightText}>{activeSection === "AddImage" ? 'Next' : 'Share'}</Text>
      </Pressable>
    </View>
  );
};

export default Header2;
