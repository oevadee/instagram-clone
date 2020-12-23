import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";

import {
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Platform,
  Button,
  Image,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Header2 from "../../components/Header2/Header2";
import * as FileSystem from "expo-file-system";

const AddImage = () => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1571950337229-f78566132580?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80"
  );

  // useEffect(async () => {
  //     const {
  //       status,
  //     } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (Platform.OS !== "web") {
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  // }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("image pick -- ", result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.body}>
        <Header2 activeSection="AddImage" image={image} />
        <View style={styles.addImageContainer}>
          <View style={styles.chosenImageContainer}>
            <Image source={{ uri: image }} style={styles.chosenImage} />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.nextButton} onPress={pickImage}>
              <Text style={styles.nextButtonText}>Add your own image</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddImage;
