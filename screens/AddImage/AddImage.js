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
} from "react-native";
import * as ImagePicker from "expo-image-picker";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Header2 from "../../components/Header2/Header2";
import * as FileSystem from "expo-file-system";

const AddImage = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (Platform.OS !== "web") {
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('image pick -- ', result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = () => {};

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.body}>
        <Header2 />
        <View style={styles.addImageContainer}>
          <View style={styles.chosenImageContainer}>
            {image && <Image source={{ uri: image }} style={styles.chosenImage} />}
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Choose your image" onPress={pickImage} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Upload your image" onPress={uploadImage} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddImage;
