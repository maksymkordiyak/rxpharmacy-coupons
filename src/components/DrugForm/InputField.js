import React from "react";
import {View} from "react-native";
import {any, bool, func, number, shape, string} from "prop-types";
import styles from "./InputField.styles";
import Autocomplete from "../Autocomplete";
import {HelveticaBoldText} from "../StyledText";

export const InputField = ({
  input,
  meta: {touched, active, error, valid},
  index,
  ...inputProps
}) => {
  let validationStyles;
  if (touched && !active) {
    validationStyles = !valid && styles.invalid;
  }
  const count = index + 1;

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <HelveticaBoldText style={styles.index}>{count}</HelveticaBoldText>
      <Autocomplete
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
      />
      {touched && error && <Text styles={styles.invalid}>{error}</Text>}
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
  index: number,
};
