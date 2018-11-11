import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {bool, func, object, oneOf, number, string} from "prop-types";
import {styles, BUTTON_TYPES, BUTTON_SIZES} from "./Button.styles";
import {Icon, ICON_SETS} from "../Icon/index";

export const Button = ({
  type,
  iconSet,
  buttonSize,
  style,
  textStyle,
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
      onPress={onClick}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: BUTTON_TYPES[type] || "secondary",
          minHeight: BUTTON_SIZES[buttonSize] || 34.1,
        },
        styles.buttonContainer,
        style,
      ]}
      disabled={disabled}
    >
      {left && <Icon name={left} size={size} color={color} iconSet={iconSet} />}
      {middle && (
        <Text style={[styles.btnText, textStyle]} ellipsizeMode="tail">
          {middle.toUpperCase()}
        </Text>
      )}
      {right && (
        <Icon name={right} size={size} color={color} iconSet={iconSet} />
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  type: oneOf(Object.keys(BUTTON_TYPES)).isRequired,
  iconSet: oneOf(Object.keys(ICON_SETS)),
  buttonSize: oneOf(Object.keys(BUTTON_SIZES)),
  middle: string.isRequired,
  left: string,
  right: string,
  onClick: func,
  style: object,
  textStyle: object,
  color: string,
  size: number,
  disabled: bool,
};

Button.defaultProps = {
  left: null,
  right: null,
  type: "primary",
};

export const IconButton = ({onClick, style, name, color, size, iconSet}) => (
  <TouchableOpacity
    style={[styles.iconContainer, style]}
    onPress={onClick}
    activeOpacity={0.7}
  >
    <Icon size={size} name={name} color={color} iconSet={iconSet} />
  </TouchableOpacity>
);

IconButton.propTypes = {
  iconSet: oneOf(Object.keys(ICON_SETS)).isRequired,
  name: string.isRequired,
  style: object,
  color: string,
  onClick: func,
  size: number,
};
