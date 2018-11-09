import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";
import {styles} from "../Autocomplete/Autocomplete.styles";

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
    height: 40.8,
    paddingHorizontal: 5.2,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
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
    paddingLeft: 24,
  },
  primaryText: {
    color: colors.primary,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 0,
    marginLeft: 10,
  },
  invalid: {
    color: colors.errorText,
    borderBottomColor: colors.errorBackground,
    borderBottomWidth: 1,
  },
});
