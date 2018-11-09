import React from "react";
import {string} from "prop-types";
import {Ionicons} from "@expo/vector-icons";

export const Icon = ({name, size, color}) => {
  return <Ionicons name={name} size={size || 32} color={color || "#ffffff"} />;
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
};
