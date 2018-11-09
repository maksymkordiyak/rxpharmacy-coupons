import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  plus: {
    position: "absolute",
    left: 16.6,
    top: 9,
  },
  suggestionList: {
    width: 358,
    backgroundColor: "white",
    paddingTop: 6,
    marginTop: -6,
  },
  listFooter: {
    height: 16.7,
    borderBottomColor: colors.primary,
  },
  input: {
    fontSize: 20,
    textDecorationLine: "none",
    paddingLeft: 40,
    height: 42,
    width: 358,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.primary,
    fontFamily: "HelveticaMedium",
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 3,
    height: 41,
    borderTopWidth: 0,
    borderWidth: 1,
    borderLeftColor: colors.primary,
    borderRightColor: colors.primary,
    borderBottomColor: colors.dividerColor,
  },
  listItemText: {
    fontSize: 19,
  },
  listHeader: {
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    height: 35.8,
  },
  listHeaderText: {
    fontSize: 17,
    color: colors.darkConcrete,
  },
});
