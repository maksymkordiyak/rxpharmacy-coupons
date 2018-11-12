import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.4)",
    marginTop: 20,
  },
  valid: {
    borderColor: "#53E69D",
  },
  invalid: {
    borderColor: "#F55E64",
  },
  index: {
    color: colors.tertiary,
  },
});
