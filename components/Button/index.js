import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {bool, func, object, oneOf, string} from "prop-types";
import {styles, BUTTON_TYPES} from "./Button.styles";
import {Icon} from "../Icon";

export const Button = ({
  type,
  style,
  left,
  right,
  middle,
  onClick,
  color,
  size,
  disabled,
}) => {
  return (
    <TouchableOpacity
      type={BUTTON_TYPES[type]}
      onPress={onClick}
      style={[styles.iconContainer, style]}
      disabled={disabled}
    >
      {left && <Icon name={left} size={size} color={color} />}
      {middle && (
        <Text style={styles.btnText} ellipsizeMode="tail">
          {middle.toUpperCase()}
        </Text>
      )}
      {right && <Icon name={right} size={size} color={color} />}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  type: oneOf(Object.keys(BUTTON_TYPES)),
  middle: string.isRequired,
  left: string,
  right: string,
  onClick: func,
  style: object,
  color: string,
  size: string,
  disabled: bool,
};

Button.defaultProps = {
  left: null,
  right: null,
  type: "primary",
};

export const IconButton = ({onClick, style, name, color, size}) => (
  <TouchableOpacity style={[styles.iconContainer, style]} onPress={onClick}>
    <Icon size={size} name={name} color={color} />
  </TouchableOpacity>
);

IconButton.propTypes = {
  name: string.isRequired,
  style: object,
  color: string,
  onClick: func,
  size: string,
};
