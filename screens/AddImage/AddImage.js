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
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://source.unsplash.com/random/600x600?dog").then((res) =>
      setImage(res.url)
    );
  });

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
        <Header2 activeSection="AddImage" image={image} setImage={setImage} />
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
