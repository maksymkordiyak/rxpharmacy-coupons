import React from "react";
import {Text} from "react-native";

export const MonoText = props => (
  <Text {...props} style={[{fontFamily: "SpaceMono"}, props.style]} />
);
export const SerifText = props => (
  <Text {...props} style={[{fontFamily: "Rokkitt"}, props.style]} />
);
export const SerifBoldText = props => (
  <Text {...props} style={[{fontFamily: "RokkittBold"}, props.style]} />
);
export const HelveticaMediumText = props => (
  <Text {...props} style={[{fontFamily: "HelveticaMedium"}, props.style]} />
);
