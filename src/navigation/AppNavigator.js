import {createSwitchNavigator, createStackNavigator} from "react-navigation";
import IntroScreen from "../screens/IntroScreen";

import MainTabNavigator from "./MainTabNavigator";

const IntroStackNavigator = createStackNavigator({
  Intro: {
    screen: IntroScreen,
  },
});

export default createSwitchNavigator(
  {
    Intro: IntroStackNavigator,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: "Intro",
  },
);
