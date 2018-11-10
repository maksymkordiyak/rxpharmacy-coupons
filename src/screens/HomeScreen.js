import React from "react";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import {WebBrowser} from "expo";
import {Button} from "../components/Button/index";
import {LogoTitle} from "../components/Headers/index";
import Autocomplete from "../components/Autocomplete/index";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: "#129a8d",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes",
    );
  };

  render() {
    return (
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
          <View style={{paddingLeft: 10}}>
            <Autocomplete />
          </View>
          <View style={styles.getStartedContainer}>
            <Button
              type="secondary"
              left="md-share"
              size={20}
              middle="Test"
              iconSet="Ionicons"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
});
