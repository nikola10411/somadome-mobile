import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
const Feel = ({ navigation, feeling, imagePath }) => {
  const images = {
    creative: require("../../../assets/images/creative.png"),
    relaxed: require("../../../assets/images/relaxed-1.png"),
    focused: require("../../../assets/images/FOCUSED-1.png"),
    energized: require("../../../assets/images/energized-1.png"),
    recovered: require("../../../assets/images/RECOVERED-1.png"),
  };
  //display text
  return (
    <View style={styles.container}>
      <ImageBackground source={images[imagePath]} style={styles.image}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Creative", { path: imagePath })}>
          <Text style={styles.text}>{feeling.toUpperCase()}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    letterSpacing: 3
  },
});
export default Feel;
