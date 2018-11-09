import React from "react";
import {string, object, oneOf, number} from "prop-types";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

export const ICON_SETS = Object.freeze({
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
});

export const Icon = ({name, size, color, style, iconSet}) => {
  const IconSet = ICON_SETS[iconSet] || Ionicons;

  return (
    <IconSet
      name={name}
      size={size || 20}
      color={color || "#ffffff"}
      style={style}
    />
  );
};

Icon.propTypes = {
  iconSet: oneOf(Object.keys(ICON_SETS)).isRequired,
  name: string.isRequired,
  color: string,
  size: number,
  style: object,
};
