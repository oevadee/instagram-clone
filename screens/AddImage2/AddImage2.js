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
import { Switch, TextInput } from "react-native-gesture-handler";

const AddImage2 = ({ navigation, route }) => {
  const [description, setDescription] = useState("");
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
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
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.addDescription}>
          <Text style={styles.addDescriptionText}>Tag People</Text>
          <Ionicons name="ios-arrow-forward" size={24} color="#fff" />
        </View>
        <View style={styles.addDescription}>
          <Text style={styles.addDescriptionText}>Add Location</Text>
          <Ionicons name="ios-arrow-forward" size={24} color="#fff" />
        </View>
        <View style={styles.addDescriptionSocialContainer}>
          <View style={styles.addDescriptionSocials}>
            <Text style={styles.addDescriptionText}>Facebook</Text>
            <Switch onValueChange={() => setIsEnabled1(!isEnabled1)} value={isEnabled1} />
          </View>
          <View style={styles.addDescriptionSocials}>
            <Text style={styles.addDescriptionText}>Twitter</Text>
            <Switch onValueChange={() => setIsEnabled2(!isEnabled2)} value={isEnabled2} />
          </View>
          <View style={[styles.addDescriptionSocials, { marginBottom: 0 }]}>
            <Text style={styles.addDescriptionText}>Tumblr</Text>
            <Switch onValueChange={() => setIsEnabled3(!isEnabled3)} value={isEnabled3} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddImage2;
