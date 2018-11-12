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
          <View style={styles.options}>
            <View style={styles.optionsRow}>
              <View>
                <Text>Zip: {zip}</Text>
              </View>
              <View>
                <Button
                  type="transparent"
                  iconSet="MaterialIcons"
                  buttonSize="medium"
                  middle="Change Location"
                  left="location-on"
                  preserveInputCase
                  color={colors.primary}
                  textStyle={styles.textStyle}
                />
              </View>
            </View>
            <View style={styles.optionsRow}>
              <View>
                <Text>Number of Prescriptions: {numberOfPrescriptions}</Text>
              </View>
              <View>
                <Button
                  type="transparent"
                  iconSet="Entypo"
                  buttonSize="medium"
                  middle="Change Location"
                  left="location-pin"
                  preserveInputCase
                  textStyle={styles.textStyle}
                />
              </View>
            </View>
          </View>
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
    paddingTop: 15,
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
