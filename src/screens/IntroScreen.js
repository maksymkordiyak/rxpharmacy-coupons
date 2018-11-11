import React from "react";
import {Text, Image, ImageBackground, View, StyleSheet} from "react-native";
import {LinearGradient} from "expo";
import {object} from "prop-types";
import {Button} from "../components/Button";

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {
      navigation: {navigate},
    } = this.props;

    return (
      <LinearGradient
        colors={["#00a49a", "#00a096", "#00948b", "#008d84"]}
        style={{flex: 1, alignItems: "stretch", justifyContent: "flex-start"}}
      >
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.6)",
            "rgba(255,255,255,0)",
          ]}
          style={styles.wrapper}
        >
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../assets/images/introLogo.png")}
            />
            <View style={styles.btnContainer}>
              <ImageBackground
                source={require("../assets/images/intoBtnBg.png")}
                resizeMode="contain"
                style={styles.introBtnBg}
              >
                <Image
                  style={styles.pillImg}
                  source={require("../assets/images/pillBig.png")}
                />
                <Button
                  style={styles.introBtn}
                  type="lightGreen"
                  buttonSize="large"
                  middle="START SAVING"
                  textStyle={{fontSize: 26}}
                  onClick={() => navigate("Home")}
                />
              </ImageBackground>
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    maxHeight: "50%",
    position: "relative",
    top: 70,
  },
  container: {
    paddingBottom: 50,
  },
  logo: {
    width: 307,
    height: 87,
    marginBottom: 63.9,
  },
  btnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  introBtnBg: {
    width: 270,
    height: 66.3,
    marginLeft: 10,
  },
  introBtn: {
    width: 250,
    height: 48,
    marginHorizontal: 10,
    marginTop: 9,
    zIndex: 2,
    position: "relative",
  },
  pillImg: {
    height: 73,
    width: 37,
    position: "absolute",
    zIndex: 3,
    left: -10,
    top: -2,
  },
});
