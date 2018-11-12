import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.4)",
    paddingVertical: 13,
    width: "100%",
  },
  input: {
    minWidth: "88%",
    maxHeight: 40,
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
  active: {
    zIndex: 100,
  },
});
