import React from "react";
import styles from "./styles";

// Components
import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ headerText, headerIcon, iconSet }) => {
  return (
    <View style={styles.header}>
      <View style={styles.userName}>
        {headerText && <Text style={styles.userNameText}>{headerText}</Text>}
        {headerIcon && <Image style={styles.headerLogo} source={require('../../images/Instagram-Logo.png')} />}
        {iconSet === 'Profile' && (
          <Ionicons
            name="ios-arrow-down"
            size={16}
            color="#fff"
            style={{ marginLeft: 5 }}
          />
        )}
      </View>
      <View style={styles.headerIcons}>
        {iconSet === "Profile" && (
          <>
            <Ionicons
              name="md-add"
              size={26}
              color="#fff"
              style={{ marginRight: 25 }}
            />
            <Ionicons name="md-menu" size={26} color="#fff" />
          </>
        )}
        {iconSet === "Home" && (
          <>
            <Ionicons
              name="ios-heart"
              size={26}
              color="#fff"
              style={{ marginRight: 25 }}
            />
            <Ionicons name="md-paper-plane" size={26} color="#fff" />
          </>
        )}
      </View>
    </View>
  );
};

export default Header;
