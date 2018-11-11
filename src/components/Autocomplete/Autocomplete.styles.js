import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  plus: {
    position: "absolute",
    left: 16.6,
    top: 9,
  },
  list: {
    width: 358,
    backgroundColor: "white",
    paddingTop: 6,
    marginTop: -6,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  listShadow: {
    elevation: 4,
    shadowOffset: {width: 6, height: 9},
    shadowColor: colors.darkConcrete,
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  listFooter: {
    height: 16.7,
    borderTopWidth: 1,
    borderTopColor: colors.dividerColor,
  },
  input: {
    fontSize: 20,
    textDecorationLine: "none",
    paddingLeft: 40,
    height: 42,
    maxWidth: 358,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.primary,
    fontFamily: "HelveticaMedium",
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 6,
    height: 41,
  },
  listItemText: {
    fontSize: 19,
    color: colors.muddyGray,
  },
  listHeader: {
    height: 35.8,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  listHeaderText: {
    fontSize: 17,
    color: colors.darkConcrete,
  },
  separator: {
    height: 1,
    backgroundColor: colors.dividerColor,
  },
  sectionSeparator: {
    backgroundColor: colors.primary,
  },
});
