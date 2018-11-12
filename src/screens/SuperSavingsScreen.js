import React, {Fragment} from "react";
import {Alert, ScrollView, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import Menu from "../components/Menu";
import {colors} from "../constants/Colors";
import {Button} from "../components/Button";
import DrugForm from "../components/DrugForm";
export default class SuperSavingsScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      zip: 70816,
      numberOfPrescriptions: 3,
    };
  }

  render() {
    const {zip, numberOfPrescriptions} = this.state;

    return (
      <Fragment>
        <Menu />
        <ScrollView style={styles.container}>
          <DrugForm
            onSubmit={values =>
              Alert.alert("Submitted!", JSON.stringify(values))
            }
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
