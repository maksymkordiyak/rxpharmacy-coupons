import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    paddingTop: 0,
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
    paddingRight: 21,
    borderBottomWidth: 1,
    borderTopColor: colors.primary,
    borderBottomColor: colors.primary,
  },
  submitBtn: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 25,
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
    fontSize: 17,
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
});
