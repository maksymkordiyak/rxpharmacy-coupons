import React from "react";
import {Image, StyleSheet, TouchableOpacity, Text, View} from "react-native";
import {bool, func, number, oneOfType, object, string} from "prop-types";
import {colors} from "../../constants/Colors";

export const TabBarContent = ({
  image,
  text,
  focused,
  style = {},
  textStyle = {},
  imageStyle = {},
  onClick = null,
}) => {
  const comp = (
    <View style={[styles.row, style]}>
      <Image style={[styles.tabImage, imageStyle]} source={image} />
      <Text
        style={[
          focused ? styles.tabTextActive : styles.tabTextInactive,
          textStyle,
        ]}
      >
        {text}
      </Text>
    </View>
  );

  if (onClick) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onClick}>
        {comp}
      </TouchableOpacity>
    );
  }

  return comp;
};

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
  style: object,
  textStyle: object,
  imageStyle: object,
  onClick: func,
};
