import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    padding: 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  errorText: {
    color: colors.errorBackground,
  },
  submitBtn: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 25,
    padding: 5,
  },
});
