import React from "react";
import { Image, View, Pressable } from "react-native";
import styles from "./styles";

const Miniature = ({ imageUri, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.miniature}>
      <Image style={styles.miniatureImage} source={imageUri} />
    </Pressable>
  );
};

export default Miniature;
