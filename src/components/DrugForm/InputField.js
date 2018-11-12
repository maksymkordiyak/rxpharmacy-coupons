import React from "react";
import {View} from "react-native";
import {any, bool, func, shape, string} from "prop-types";
import styles from "./InputField.styles";
import Autocomplete from "../Autocomplete";

export const InputField = ({input, meta, ...inputProps}) => {
  let validationStyles = null;
  if (meta.touched && !meta.active) {
    validationStyles = meta.valid ? styles.valid : styles.invalid;
  }

  const {index} = inputProps; // this is a number to display next to autocomplete

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <Autocomplete
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
      />
    </View>
  );
};

InputField.propTypes = {
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
