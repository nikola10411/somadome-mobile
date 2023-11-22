import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function FeelTypes({ imageType, text }) {
  const images = {
    image4: require("../../../assets/images/types/BREATHWORK.png"),
    image2: require("../../../assets/images/types/sound.png"),
    image3: require("../../../assets/images/types/somadome.png"),
    image1: require("../../../assets/images/types/MEDITATION.png"),
  };

  return (
    <View style={style.container}>
      <View style={{flex:3}}>
        <Image
          resizeMode="cover"
          style={style.image}
          source={images[imageType]}
        ></Image>
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>{text}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    flex: 1,
    width: 40,
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    marginBottom:10
  },
  text: {
    color: "white",
    fontSize: 10,
  },
});
