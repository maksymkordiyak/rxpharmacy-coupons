import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {IconButton} from "../Button";
import {SerifBoldText, SerifText} from "../StyledText";

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

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  pharmacyHeaderText: {
    fontSize: 30,
    letterSpacing: -0.01,
    color: "#FFFFFF",
  },
  headerLogo: {
    width: 36,
    height: 34.8,
    resizeMode: "contain",
    marginLeft: 5.8,
  },
});
