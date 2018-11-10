import React from "react";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import {colors} from "../constants/Colors";
import {TabBarIcon} from "../components/TabBarIcon/index";
import HomeScreen from "../screens/HomeScreen";
import SuperSavingsScreen from "../screens/SuperSavingsScreen";
import LogoTitle from "../components/Headers/LogoTitle";
import BasicHeader from "../components/Headers/BasicHeader";

const tabBarOptions = {
  activeBackgroundColor: colors.primary,
  inactiveBackgroundColor: colors.tintColor,
  activeTintColor: colors.bgPrimary,
  inactiveTintColor: colors.primary,
  showLabel: false,
  style: {
    height: 67.6,
  },
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: colors.primary,
        zIndex: 2,
      },
      headerTintColor: colors.textPrimary,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
);

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

const LinksStack = createStackNavigator(
  {
    Links: SuperSavingsScreen,
  },
  {
    navigationOptions: {
      headerTitle: <BasicHeader text="Prescription List" />,
      headerStyle: {
        backgroundColor: colors.primary,
        zIndex: 2,
      },
      headerTintColor: colors.textPrimary,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
);

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
