import {Text} from "react-native";
import React from "react";

export const capitalizeFirstLetter = string => {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
};

export const highlightString = (string, valueToHighlight, highlightColor) => {
  const startIndex = string.indexOf(valueToHighlight.toLowerCase());

  return [
    string.substring(0, startIndex),
    <Text style={{color: highlightColor}}>
      {string.substring(startIndex, startIndex + valueToHighlight.length)}
    </Text>,
    string.substring(startIndex + valueToHighlight.length),
  ];
};
