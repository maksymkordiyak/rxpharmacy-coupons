import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.4)",
    paddingVertical: 13,
    width: "100%",
  },
  input: {
    minWidth: "88%",
  },
  invalid: {
    color: colors.errorText,
    borderBottomColor: colors.errorBackground,
    borderBottomWidth: 1,
  },
  index: {
    color: colors.tertiary,
    fontSize: 20,
    width: "7%",
    textAlign: "center",
  },
});
