import React, {Component, Fragment} from "react";
import {Alert, Image, ScrollView, StyleSheet, View} from "react-native";
import {WebBrowser} from "expo";
import {Button} from "../components/Button/index";
import Autocomplete from "../components/Autocomplete/index";
import DrugForm from "../components/DrugForm";
import Menu from "../components/Menu";

export default class HomeScreen extends Component {
  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes",
    );
  };

  render() {
    return (
      <Fragment>
        <Menu />
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/robot-dev.png")
                    : require("../assets/images/robot-prod.png")
                }
                style={styles.welcomeImage}
              />
            </View>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
});
