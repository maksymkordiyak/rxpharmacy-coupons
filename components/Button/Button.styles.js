import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export const BUTTON_TYPES = Object.freeze({
  error: "RED",
  warn: "YELLOW",
  success: "GREEN",
  none: "NONE",
});

export const styles = StyleSheet.create({
  iconContainer: {
    minWidth: 22,
    minHeight: 22,
    margin: 0,
    padding: 0,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 15,
  },
});
