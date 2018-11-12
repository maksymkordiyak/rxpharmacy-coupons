import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: "100%",
  },
  plus: {
    position: "absolute",
    left: 16.6,
    top: 9,
  },
  list: {
    minWidth: "80%",
    backgroundColor: colors.bgPrimary,
    paddingTop: 0,
    marginTop: 0,
    borderWidth: 1,
    borderColor: colors.primary,
    maxHeight: 300,
  },
  listShadow: {
    backgroundColor: colors.bgPrimary,
    position: "absolute",
    zIndex: 3,
    top: 50,
    right: "4%",
    left: "8%",
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
    maxWidth: "100%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.primary,
    fontFamily: "HelveticaMedium",
    flexGrow: 2,
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 6,
    height: 41,
    justifyContent: "center",
  },
  listItemText: {
    fontSize: 19,
    height: 19,
    justifyContent: "center",
    color: colors.muddyGray,
  },
  listHeader: {
    height: 41.8,
    justifyContent: "center",
    paddingTop: 0,
    backgroundColor: colors.bgPrimary,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  listHeaderText: {
    fontSize: 17,
    height: 17,
    color: colors.darkConcrete,
  },
  separator: {
    height: 1,
    backgroundColor: colors.dividerColor,
  },
  sectionSeparator: {
    backgroundColor: colors.primary,
  },
  active: {
    zIndex: 100,
  },
});
