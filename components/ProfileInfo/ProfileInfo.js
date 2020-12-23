import React, { useState, useEffect } from "react";
import styles from "./styles";
import { Image, Text, View } from "react-native";
import db from "../../firebase";

const ProfileInfo = ({ userName_uid }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    userName_uid &&
      db
        .collection("userData")
        .doc("users")
        .collection("users")
        .doc(userName_uid)
        .get()
        .then((snap) => setUserData(snap.data()));
  }, [userName_uid]);

  const handleLinkPress = () => {
    Linking.openURL("https://www.instagram.com/prorzeczy/");
  };

  return (
    <>
      <View style={styles.stats}>
        {userData && (
          <Image
            style={styles.statsLogo}
            source={{ uri: userData.profilePicture }}
          />
        )}
        {userData && (
          <>
            <View style={styles.statsCount}>
              <Text style={styles.statsCountNumber}>{userData.posts}</Text>
              <Text style={styles.statsCountName}>Post</Text>
            </View>
            <View style={styles.statsCount}>
              <Text style={styles.statsCountNumber}>{userData.followers}</Text>
              <Text style={styles.statsCountName}>Followers</Text>
            </View>
            <View style={styles.statsCount}>
              <Text style={styles.statsCountNumber}>{userData.following}</Text>
              <Text style={styles.statsCountName}>Following</Text>
            </View>
          </>
        )}
      </View>
      {userData && (
        <View style={styles.bio}>
          <Text style={styles.bioName}>{userData.name}</Text>
          {userData.bio !== "" && (
            <Text style={styles.bioDescription}>
              {userData.bio}{" "}
              <Text onPress={handleLinkPress}>{userData.website}</Text>
            </Text>
          )}
        </View>
      )}
    </>
  );
};

export default ProfileInfo;
