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
import { TextInput } from "react-native-gesture-handler";

const AddImage2 = ({ navigation, route }) => {
  const [description, setDescription] = useState("");
  const { image } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <Header2 activeSection="AddImage2" />
      <View style={styles.body}>
        <View style={styles.addDescription}>
          <Image source={{ uri: image }} style={styles.addDescriptionImage} />
          <TextInput
            style={styles.addDescriptionInput}
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="Write a caption..."
            placeholderTextColor="rgb(123, 123, 123)"
            keyboardAppearance="dark"
            multiline={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddImage2;
