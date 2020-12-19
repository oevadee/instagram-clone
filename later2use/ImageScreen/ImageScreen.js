import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";

import { Text, View, SafeAreaView, TouchableHighlight } from "react-native";
import { Camera } from "expo-camera";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

const AddImage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
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
      const options = { quality: 0.8, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", source);
      }
    }
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const renderCancelPreviewButton = () => (
    <TouchableHighlight onPress={cancelPreview} style={styles.closeButton}>
      <Ionicons name="ios-close" size={42} color="#fff" />
    </TouchableHighlight>
  );

  return (
    <View style={styles.body}>
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
      <View style={styles.previewContainer}>
        {isPreview && renderCancelPreviewButton()}
      </View>
    </View>
  );
};

export default AddImage;
