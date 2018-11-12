import React, {Component, Fragment} from "react";
import {Alert, ScrollView, StyleSheet} from "react-native";
import Menu from "../components/Menu";
import DrugForm from "../components/DrugForm";
import {colors} from "../constants/Colors";

export default class SuperSavingsScreen extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Menu />
        <ScrollView style={styles.container}>
          <DrugForm
            onSubmit={values => {
              console.log(values);
              Alert.alert("Submitted!", JSON.stringify(values));
            }}
          />
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.tintColor,
  },
  optionsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    color: colors.primary,
  },
});
