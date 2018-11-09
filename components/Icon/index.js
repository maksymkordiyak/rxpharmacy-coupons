import React from "react";
import {string} from "prop-types";
import {Ionicons, Octicons} from "@expo/vector-icons";

export const Icon = ({name, size, color, style}) => {
  return (
    <Ionicons
      name={name}
      size={size || 32}
      color={color || "#ffffff"}
      style={style}
    />
  );
};

export const Octicon = ({name, size, color, style}) => {
  return (
    <Octicons
      name={name}
      size={size || 32}
      color={color || "#ffffff"}
      style={style}
    />
  );
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
};
