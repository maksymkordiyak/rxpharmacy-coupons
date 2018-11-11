import {Text} from "react-native";
import React, {Fragment} from "react";

export const capitalizeFirstLetter = string => {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
};

export const highlightString = (string, valueToHighlight, highlightColor) => {
  const startIndex = string.indexOf(valueToHighlight);

  if (startIndex > -1) {
    return [
      <Fragment key="substring_1">{string.substring(0, startIndex)}</Fragment>,
      <Text key="substring_2" style={{color: highlightColor}}>
        {string.substring(startIndex, startIndex + valueToHighlight.length)}
      </Text>,
      <Fragment key="substring_3">
        {string.substring(startIndex + valueToHighlight.length)}
      </Fragment>,
    ];
  }

  return string;
};
