import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function MoreCommon({ heading, NavigateHandler }) {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => NavigateHandler(heading[1])}
    >
      <View style={style.text}>
        <Text style={{ color: "grey",fontFamily: "BebasNeue-Book",fontSize:25 }}>{heading[0]}</Text>
      </View>
      <View style={style.image}>
        <Image
          style={style.arrowImage}
          source={require("../../../assets/images/more/back.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "#F9F9F9",
    borderBottomWidth: 1,
    justifyContent : 'space-between'
  },
  text: {
    padding: 10,
    color: "grey",
  },
  image: {
    position :"relative",
    left: 50,
    marginTop: 20,
  },
  arrowImage: {
    width: 20,
    height: 20
  },
});
