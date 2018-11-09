import React from "react";
import {Platform, StatusBar, StyleSheet, View} from "react-native";
import {AppLoading, Asset, Font} from "expo";
import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png"),
      ]),
      Font.loadAsync({
        Arial: require("./assets/fonts/arial.ttf"),
        ArialBold: require("./assets/fonts/arialbd.ttf"),
        HelveticaBold: require("./assets/fonts/HelveticaNeueLTStd-Bd_0.otf"),
        HelveticaLight: require("./assets/fonts/HelveticaNeueLTStd-LtIt.otf"),
        HelveticaMedium: require("./assets/fonts/HelveticaNeueLTStd-Md_0.otf"),
        RokkittBold: require("./assets/fonts/Rokkitt-Bold.ttf"),
        Rokkitt: require("./assets/fonts/Rokkitt-Regular.ttf"),
        SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
        UniformMedium: require("./assets/fonts/Uniform-Medium_6.otf"),
        UniformRegular: require("./assets/fonts/Uniform-Regular_1.otf"),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
