import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>adee.pfd</Text>
          <Ionicons
            name="ios-arrow-down"
            size={16}
            color="#fff"
            style={{ marginLeft: 5 }}
          />
        </View>
        <View style={styles.headerIcons}>
          <Ionicons
            name="md-add"
            size={30}
            color="#fff"
            style={{ marginRight: 25 }}
          />
          <Ionicons name="md-menu" size={30} color="#fff" />
        </View>
      </View>
      <View style={styles.stats}>
        <Image
          style={styles.statsLogo}
          source={{
            uri:
              "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/129387507_233365918312356_1345207412882391716_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=5UrviaXHmuwAX-aq7jT&tp=1&oh=ccba271beb700bd96a3ad6522fe4050d&oe=5FFC2A01",
          }}
        />
        <View style={styles.statsCount}>
          <Text style={styles.statsCountNumber}>1</Text>
          <Text style={styles.statsCountName}>Post</Text>
        </View>
        <View style={styles.statsCount}>
          <Text style={styles.statsCountNumber}>472</Text>
          <Text style={styles.statsCountName}>Followers</Text>
        </View>
        <View style={styles.statsCount}>
          <Text style={styles.statsCountNumber}>2378</Text>
          <Text style={styles.statsCountName}>Following</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#121212",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userNameText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  statsLogo: {
    width: 90,
    height: 90,
    borderRadius: 50
  },
  statsCount: {
    display: 'flex',
    alignItems: 'center',
  },
  statsCountNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  statsCountName: {
    color: '#aaa'
  }
});
