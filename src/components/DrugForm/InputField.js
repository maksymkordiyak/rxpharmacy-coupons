import React from "react";
import {TextInput, Text, View} from "react-native";
import {any, bool, func, shape, string} from "prop-types";
import styles from "./InputField.styles";

export const InputField = ({
  input,
  meta,
  ...inputProps
}) => {
  console.log("InputField error:", meta);
  let validationStyles;
  // if (touched && !active) {
  //   validationStyles = valid ? styles.valid : styles.invalid;
  // }

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
      />
      {meta.touched && meta.error && <Text>{meta.error}</Text>}
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
