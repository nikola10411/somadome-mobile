   import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import { material } from "react-native-typography";
// import ColorPicker from "react-native-wheel-color-picker";
import ColorPicker from '../WheelColorPicker/ColorPicker';

var FONT_BACK_LABEL = 15;
var FONT_HEADING = 17;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 10;
  FONT_HEADING = 25;
}

export default function Unlock() {
  return (
    <View style={style.container}>
      {/* <View style={style.heading}>
        <Text style={[material.headlineWhite, style.text]}></Text>
        <Text style={[material.captionWhite, style.text]}>
          SET YOUR COLOR CLOSE THE APP LISTEN TO ANYTHING
        </Text>
      </View> */}
      <View style={style.SlideContainer}>
        {/* <Image
          source={require("../../../assets/images/unlock/slide.png")}
        ></Image> */}

        <ColorPicker thumbSize={20} sliderSize={20} noSnap={true} row={false} />
      </View>
      <View style={style.BottomContainer}>
        <Image
          source={require("../../../assets/images/unlock/play.png")}
        ></Image>
      </View>
      <View style={style.thirdContainer}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  heading: {
    flex: 0.5,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  SlideContainer: { flex: 3, justifyContent: "center", alignItems: "center" },
  BottomContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  thirdContainer:{
    flex:1
  },
  text: {
    letterSpacing: 1,
    fontSize: FONT_BACK_LABEL,
  },
});
