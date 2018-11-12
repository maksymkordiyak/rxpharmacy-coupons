import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    paddingTop: 0,
    zIndex: 1,
  },
  optionsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.tintColor,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 28,
    paddingRight: 28,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  errorText: {
    color: colors.errorBackground,
  },
  submitBtn: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 25,
    padding: 5,
  },
  quantityButtons: {
    display: "flex",
    flexDirection: "row",
  },
  addButton: {
    marginLeft: 4,
  },
  prescriptions: {
    fontSize: 16,
    height: 16,
    color: colors.primary,
  },
  prescriptionsNumber: {
    fontSize: 21,
    color: colors.primary,
  },
  promoTextContainer: {
    paddingTop: 11,
    paddingLeft: 28,
    paddingRight: 28,
    paddingBottom: 11,
  },
  promo: {
    color: colors.textBasic,
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    zIndex: 2,
  },
});
