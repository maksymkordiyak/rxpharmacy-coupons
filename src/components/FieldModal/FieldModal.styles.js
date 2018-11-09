import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: "9%",
  },
  column: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 20,
  },
  text: {
    fontSize: 18,
    color: colors.concrete,
  },
  closeBtn: {
    alignSelf: "flex-end",
    paddingRight: 14,
    fontWeight: "bold",
  },
  closeBtnText: {
    color: colors.primary,
    fontWeight: "bold",
  },
  gutterBottom: {
    marginBottom: 20,
  },
});
