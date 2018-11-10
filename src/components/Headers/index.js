import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {IconButton} from "../Button/index";
import {
  HelveticaMediumText,
  SerifText,
  SerifBoldText,
} from "../StyledText/index";

export const LogoTitle = () => (
  <View style={styles.row}>
    <IconButton
      onClick={() => console.log("123")}
      name="three-bars"
      size={32}
      iconSet="Octicons"
    />
    <Image
      source={require("../../assets/images/header_logo.png")}
      style={styles.headerLogo}
    />
    <SerifBoldText style={styles.pharmacyHeaderText}>Pharmacy</SerifBoldText>
    <SerifText style={styles.pharmacyHeaderText}>Coupons</SerifText>
  </View>
);

export const BasicHeader = ({text}) => (
  <View style={styles.row}>
    <IconButton
      onClick={() => console.log("123")}
      name="three-bars"
      size={32}
      iconSet="Octicons"
    />
    <HelveticaMediumText style={styles.basicHeaderText}>
      {text}
    </HelveticaMediumText>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 10,
  },
  pharmacyHeaderText: {
    fontSize: 30,
    letterSpacing: -0.01,
    color: "#FFFFFF",
  },
  basicHeaderText: {
    paddingTop: 6,
    paddingLeft: 10,
    fontSize: 22,
    lineHeight: 30,
    letterSpacing: -0.65,
    color: "#FFFFFF",
  },
  headerLogo: {
    width: 36,
    height: 34.8,
    resizeMode: "contain",
    marginLeft: 5.8,
  },
});