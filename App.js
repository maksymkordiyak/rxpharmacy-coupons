import React from "react";
import {Provider} from "react-redux";
import {Platform, StatusBar, StyleSheet, View} from "react-native";
import {AppLoading, Asset, Font} from "expo";
import {PersistGate} from "redux-persist/integration/react";
import persistStore from "./src/store/configureStore";
import AppNavigator from "./src/navigation/AppNavigator";
import {colors} from "./src/constants/Colors";

const {store, persistor} = persistStore();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./src/assets/images/robot-dev.png"),
        require("./src/assets/images/robot-prod.png"),
      ]),
      Font.loadAsync({
        Arial: require("./src/assets/fonts/arial.ttf"),
        ArialBold: require("./src/assets/fonts/arialbd.ttf"),
        HelveticaBold: require("./src/assets/fonts/HelveticaNeueLTStd-Bd_0.otf"),
        HelveticaLight: require("./src/assets/fonts/HelveticaNeueLTStd-LtIt.otf"),
        HelveticaMedium: require("./src/assets/fonts/HelveticaNeueLTStd-Md_0.otf"),
        RokkittBold: require("./src/assets/fonts/Rokkitt-Bold.ttf"),
        Rokkitt: require("./src/assets/fonts/Rokkitt-Regular.ttf"),
        SpaceMono: require("./src/assets/fonts/SpaceMono-Regular.ttf"),
        UniformMedium: require("./src/assets/fonts/Uniform-Medium_6.otf"),
        UniformRegular: require("./src/assets/fonts/Uniform-Regular_1.otf"),
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
    const {skipLoadingScreen} = this.props;
    const {isLoadingComplete} = this.state;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});
