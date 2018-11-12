import React from "react";
import {Text, View} from "react-native";
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
  let activeStyles;
  if (touched && !active) {
    validationStyles = !valid && styles.invalid;
  }
  if (active) {
    console.log("isActive", index);
    activeStyles = styles.active;
  }

  return (
    <View style={[styles.inputContainer, validationStyles, activeStyles]}>
      <HelveticaBoldText style={styles.index}>{index}</HelveticaBoldText>
      <Autocomplete
        {...inputProps}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={[styles.input, activeStyles]}
        active={active}
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
