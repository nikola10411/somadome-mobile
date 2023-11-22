import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CustomeRoundUI() {
  return (
    <View>
      <View style={style.Flex1}>
        <ImageBackground
          style={style.imageRound}
          source={require("../../../assets/images/community/perform-1.png")}
        >
          <Text style={material.captionWhite}>{"250 \nPlays"}</Text>
        </ImageBackground>
      </View>
      <View style={style.Flex1}>
        <View style={{ alignItems: "center" }}>
          <Text style={material.display1}>1.</Text>
        </View>
        <Text>`INCREASE ENERGY BREATHWORK`</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Flex1: {
    flex: 1,
  },
  imageRound: {
    width: 90,
    height: 90,
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
});
