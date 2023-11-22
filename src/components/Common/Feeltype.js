import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { feelTypesBody, feelTypesMind, feelTypesSpirit } from "./Constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Feeltype({
  imageType,
  text,
  seticonName,
  setGrid,
  navigation,
  setFeelTypeArray,
}) {
  const onTypeHandler = () => {
    console.log("In ontype handler", imageType)
    if (imageType === "body") {
      setFeelTypeArray(feelTypesBody);
    } else if (imageType == "spirit") {
      setFeelTypeArray(feelTypesSpirit);
    } else if (imageType == "mind") {
      setFeelTypeArray(feelTypesMind);
    }
    // setFeelTypeArray([])
    seticonName(imageType);
    setGrid(imageType);
  }

  const images = {
    mind: require("../../../assets/images/use/mind_button.png"),
    mindActive: require("../../../assets/images/use/mindActive.png"),
    body: require("../../../assets/images/use/body.png"),
    bodyActive: require("../../../assets/images/use/BODY_ON_ICON.png"),
    spirit: require("../../../assets/images/use/sprit.png"),
    spiritActive: require("../../../assets/images/use/SPIRIT_ON_ICON.png"),
    lock: require("../../../assets/images/use/lock.png"),
  };
  console.log("In ontype handler", imageType)
  if (imageType == "lock") {
    return (
      <TouchableOpacity
        style={style.container}
        onPress={() => navigation.navigate("Unlock")}
      >
        <Image style={style.image} source={images[imageType]}></Image>
      </TouchableOpacity>
    );
  }else{
    return (
      <TouchableOpacity style={style.container}
        // activeOpacity={0.7}
        onPress={onTypeHandler}
      >
        <View style={style.imageContainer}>
          <Image style={style.image} source={images[imageType]}></Image>
        </View>
      </TouchableOpacity>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginRight : 10
  },
  image: {
    width: wp("17%"),
    height: wp("17%"),
    borderRadius: wp("8%"),
    // borderWidth : 1,
    // borderColor : "black"
  },
  imageContainer : {
    width: wp("18%"),
    height: wp("18%"),
    // borderRadius: wp("5%"),
  },
  textContainer: {
    flex: 1,
    paddingTop: 15,
  },
  text: {
    color: "grey",
    fontSize: 15,
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
