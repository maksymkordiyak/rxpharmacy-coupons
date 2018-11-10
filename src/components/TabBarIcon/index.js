import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {bool, number, string} from "prop-types";
import {colors} from "../../constants/Colors";

export const TabBarContent = ({image, text, focused}) => (
  <View style={styles.row}>
    <Image style={styles.tabImage} source={image} />
    <Text style={focused ? styles.tabTextActive : styles.tabTextInactive}>
      {text}
    </Text>
  </View>
);

export const TabBarIcon = props => <TabBarContent {...props} />;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 67.6,
    width: "100%",
  },
  tabTextActive: {
    color: colors.textPrimary,
    maxWidth: "70%",
  },
  tabTextInactive: {
    color: colors.textInvert,
    maxWidth: "70%",
  },
  tabImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 5.8,
  },
});

TabBarIcon.propTypes = {
  image: number.isRequired,
  text: string.isRequired,
  focused: bool,
};
