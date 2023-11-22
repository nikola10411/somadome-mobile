import React from "react";
import { View, Text } from "react-native";
import { material } from "react-native-typography";

export default function Heading({ name }) {
  return <Text style={([material.headline], { color: "white" })}>{name}</Text>;
}


