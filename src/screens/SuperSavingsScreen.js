import React, {Fragment} from "react";
import {ScrollView, StyleSheet} from "react-native";
import {ExpoLinksView} from "@expo/samples";
import Menu from "../components/Menu";

export default class SuperSavingsScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <ScrollView style={styles.container}>
          <ExpoLinksView />
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});
