import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UpdateDome() {
  return (
    <View style={style.container}>
      <View style={style.domePaired}></View>
      <View style={style.domeUpdate}></View>
    </View>
  );
}

const UpdateDomView = () => {
    return (<View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View></View>
    </View>)
};

const style = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  domePaired: { flex: 1 },
  domeUpdate: { flex: 1 },
});
