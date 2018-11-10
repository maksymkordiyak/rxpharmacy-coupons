import React from "react";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import {colors} from "../constants/Colors";
import {TabBarIcon} from "../components/TabBarIcon/index";
import HomeScreen from "../screens/HomeScreen";
import SuperSavingsScreen from "../screens/SuperSavingsScreen";
import {BasicHeader, LogoTitle} from "../components/Headers";

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

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: "#129a8d",
      },
      headerTintColor: "#fff",
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
        backgroundColor: "#129a8d",
      },
      headerTintColor: "#fff",
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
