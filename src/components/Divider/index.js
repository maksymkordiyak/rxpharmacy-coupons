import React from "react";
import {View, StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default ({color}) => (
  <View
    style={[styles.divider, {backgroundColor: color || colors.dividerColor}]}
  />
);

export const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    marginTop: 8.2,
    marginBottom: 8.2,
  },
});
