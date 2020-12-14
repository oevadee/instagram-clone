import React from "react";
import { StyleSheet, Image, View } from "react-native";
import styles from "./styles";

const Miniature = ({ imageUri }) => {
  return (
    <View style={styles.miniature}>
      <Image style={styles.miniatureImage} source={imageUri} />
    </View>
  );
};

export default Miniature;
