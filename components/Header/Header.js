import React from "react";
import styles from './styles';

// Components
import { View, Text, } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>olaprokopczuk</Text>
          <Ionicons
            name="ios-arrow-down"
            size={16}
            color="#fff"
            style={{ marginLeft: 5 }}
          />
        </View>
        <View style={styles.headerIcons}>
          <Ionicons
            name="md-add"
            size={30}
            color="#fff"
            style={{ marginRight: 25 }}
          />
          <Ionicons name="md-menu" size={30} color="#fff" />
        </View>
      </View>
  );
};

export default Header;
