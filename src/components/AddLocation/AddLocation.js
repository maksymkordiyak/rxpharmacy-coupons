import React from "react";
import {TextInput, Text, View} from "react-native";
import {any, bool, func, shape, string} from "prop-types";
import {Button} from "../Button";
import styles from "./AddLocation.styles";
import {colors} from "../../constants/Colors";

export const AddLocation = ({input, meta, ...inputProps}) => {
  let validationStyles = null;
  if (meta.touched && !meta.active) {
    validationStyles = meta.valid ? styles.valid : styles.invalid;
  }

  return (
    <View style={styles.options}>
      <View style={styles.optionsRow}>
        <View style={styles.row}>
          <Text style={styles.text}>Zip:</Text>
          <TextInput
            {...inputProps}
            editable={false}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
            style={[styles.input, validationStyles]}
          />
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
            textStyle={styles.primaryText}
          />
        </View>
      </View>
    </View>
  );
};

AddLocation.propTypes = {
  input: shape({
    onBlur: func.isRequired,
    onChange: func.isRequired,
    onFocus: func.isRequired,
    value: any.isRequired,
  }).isRequired,
  meta: shape({
    active: bool.isRequired,
    error: string,
    invalid: bool.isRequired,
    pristine: bool.isRequired,
    visited: bool.isRequired,
  }).isRequired,
};
