import {Dimensions, Platform} from "react-native";

export const isIos = Platform.OS === "ios";
export const isX = (() => {
  const d = Dimensions.get("window");
  const {height, width} = d;

  return (
    // This has to be iOS
    Platform.OS === "ios" &&
    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
})();
