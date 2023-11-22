import React from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";
import { normalize } from "./DynamicFonts";

var FONT_BACK_LABEL = 19;
var FONT_HEADING = 12;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 11;
  FONT_HEADING = 11;
}

export default function SessionCount({
  text,
  count,
  customeStyle,
  subheading,
}) {
  if (subheading) {
    return (
      <View style={[style.flex1, customeStyle]}>
        <Text style={style.heading}>{text}</Text>
        <Text style={style.subHeading}>{subheading}</Text>
        <Text style={style.count}> {count}</Text>
      </View>
    );
  }
  return (
    <View style={[style.flex1, customeStyle]}>
      <Text style={style.heading}>{text}</Text>
      <Text style={style.count}> {count}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  flex1: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: {
    color: "white",
    letterSpacing: 0.5,
    fontSize: normalize(FONT_HEADING),
    textAlign : 'center'
  },
  count: {
    color: "white",
    paddingTop: 20,
    fontSize: normalize(FONT_BACK_LABEL),
    textAlign : 'center'
  },
  subHeading: { color: "white", fontSize: normalize(FONT_HEADING),textAlign : 'center' },
});
