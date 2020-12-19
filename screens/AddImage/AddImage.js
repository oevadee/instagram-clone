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
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Header2 from "../../components/Header2/Header2";

const AddImage = () => {
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onCameraReady = () => {
    setIsCameraReady(true);
  };
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", source);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.body}>
      <Header2 />
      <View style={styles.addImageContainer}>
        <View style={styles.chosenImageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.chosenImage} />
          ) : (
            <Camera
              style={styles.camera}
              type={type}
              ref={cameraRef}
              onCameraReady={onCameraReady}
              onMountError={(error) => {
                console.log("cammera error", error);
              }}
            >
              <SafeAreaView style={styles.cameraSafeContainer}>
                <TouchableHighlight
                  style={styles.orientationButton}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Ionicons name="ios-repeat" size={42} color="#fff" />
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.pictureButton}
                  onPress={takePicture}
                >
                  <Ionicons name="ios-camera" size={42} color="#fff" />
                </TouchableHighlight>
              </SafeAreaView>
            </Camera>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Choose Your image" onPress={pickImage} />
        </View>
      </View>
    </View>
  );
};

export default AddImage;
