import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from './styles';

const Story = () => {
  return (
    <View style={styles.story}>
      <View style={styles.storyThumbnailCircle}>
        <Image
          style={styles.storyThumbnail}
          source={{
            uri:
              "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/121340759_175204784214612_3028362073680849066_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=p_sJCHZD-rUAX-asVGB&tp=1&oh=d11efb0242c838dd4f632f3338dd95f5&oe=5FFF20E8",
          }}
        />
      </View>
      <Text style={styles.storyText}>szczechura</Text>
    </View>
  );
};

export default Story;
