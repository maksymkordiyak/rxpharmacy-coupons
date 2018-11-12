import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  options: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.tintColor,
  },
  optionsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    height: 40.7,
    paddingHorizontal: 11,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  text: {
    lineHeight: 40,
    paddingLeft: 18,
  },
  primaryText: {
    color: colors.primary,
  },
  input: {
    borderWidth: 0,
    marginLeft: 10,
  },
  valid: {
    color: colors.textPrimary,
    backgroundColor: colors.lightGreenColor,
  },
  invalid: {
    color: colors.errorText,
    backgroundColor: colors.errorBackground,
  },
});
