import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";
import {isIos} from "../../utils/common";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    position: "relative",
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 10,
    position: "relative",
    zIndex: 2,
  },
  menuIcon: {
    opacity: 0.7,
  },
  pharmacyHeaderText: {
    marginTop: isIos ? -1 : -5,
    fontSize: 30,
    letterSpacing: -0.01,
    color: colors.textPrimary,
  },
  basicHeaderText: {
    marginTop: isIos ? 6 : -1,
    paddingLeft: 22,
    fontSize: 22,
    lineHeight: 30,
    letterSpacing: -0.65,
    color: colors.textPrimary,
  },
  headerLogo: {
    width: 34,
    height: 32,
    resizeMode: "contain",
    marginLeft: 18.8,
  },
});
