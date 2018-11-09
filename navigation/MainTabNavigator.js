import React from "react";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import {colors} from "../constants/Colors";
import {TabBarIcon} from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SuperSavingsScreen from "../screens/SuperSavingsScreen";

const tabBarOptions = {
  activeBackgroundColor: colors.primary,
  inactiveBackgroundColor: colors.tintColor,
  activeTintColor: colors.whiteColor,
  inactiveTintColor: colors.primary,
  showLabel: false,
  style: {
    height: 67.6,
  },
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      image={
        focused
          ? require("../assets/images/tab1_active.png")
          : require("../assets/images/tab1_inactive.png")
      }
      text="INSTANT SAVINGS OPTION"
    />
  ),
  tabBarOptions,
};

const LinksStack = createStackNavigator({
  Links: SuperSavingsScreen,
});

LinksStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      image={
        focused
          ? require("../assets/images/tab2_active.png")
          : require("../assets/images/tab2_inactive.png")
      }
      text="SUPER SAVINGS OPTION"
    />
  ),
  tabBarOptions,
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
