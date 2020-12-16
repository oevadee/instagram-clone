import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Data
import userData from "../../data/userData";

const Header2 = ({ navigation, commentSectionActive = false }) => {
  return (
    <View style={styles.header}>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.goBackIcon}
        name="ios-arrow-back"
        size={34}
        color="#fff"
      />
      <View style={styles.headerInfo}>
        {commentSectionActive ? (
          <Text style={styles.headerInfoPosts}>Comments</Text>
        ) : (
          <>
            <Text style={styles.headerInfoUser}>{userData.userName}</Text>
            <Text style={styles.headerInfoPosts}>Posts</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default Header2;
