import {Text} from "react-native";
import React from "react";

export const capitalizeFirstLetter = string => {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
};

export const highlightString = (string, searchValue, highlightColor) => {
  return string.replace(
    searchValue,
    <Text style={{color: "red"}}>{searchValue}</Text>,
  );
};
