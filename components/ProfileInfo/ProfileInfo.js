import React from "react";
import styles from "./styles";
import { Image, Text, View } from "react-native";

const ProfileInfo = ({
  profilePicture,
  posts,
  followers,
  following,
  name,
  bio,
  website,
}) => {
  const handleLinkPress = () => {
    Linking.openURL("https://www.instagram.com/prorzeczy/");
  };

  return (
    <>
      <View style={styles.stats}>
        <Image style={styles.statsLogo} source={{ uri: profilePicture }} />
        <View style={styles.statsCount}>
          <Text style={styles.statsCountNumber}>{posts}</Text>
          <Text style={styles.statsCountName}>Post</Text>
        </View>
        <View style={styles.statsCount}>
          <Text style={styles.statsCountNumber}>{followers}</Text>
          <Text style={styles.statsCountName}>Followers</Text>
        </View>
        <View style={styles.statsCount}>
          <Text style={styles.statsCountNumber}>{following}</Text>
          <Text style={styles.statsCountName}>Following</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bioName}>{name}</Text>
        {bio !== '' && (
          <Text style={styles.bioDescription}>
            {bio} <Text onPress={handleLinkPress}>{website}</Text>
          </Text>
        )}
      </View>
    </>
  );
};

export default ProfileInfo;
