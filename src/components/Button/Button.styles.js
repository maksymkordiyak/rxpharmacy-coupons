import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export const BUTTON_TYPES = Object.freeze({
  error: colors.redColor,
  warn: colors.warn,
  primary: colors.primary,
  secondary: colors.secondary,
  tertiary: colors.tertiary,
  lightGreen: colors.lightGreenColor,
  transparent: "transparent",
});

export const BUTTON_SIZES = Object.freeze({
  small: 31.7,
  medium: 34.1,
  large: 39.6,
  xlarge: 50.5,
});

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    margin: 0,
    paddingLeft: 18,
    paddingRight: 18,
  },
  btnText: {
    color: colors.textPrimary,
    fontSize: 15,
    marginLeft: 6,
    marginRight: 6,
  },
  iconContainer: {
    minWidth: 22,
    minHeight: 22,
    margin: 0,
    padding: 0,
    paddingLeft: 6,
    paddingRight: 6,
  },
});
