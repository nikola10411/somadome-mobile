import React from "react";
import { StyleSheet, Text, View, PixelRatio } from "react-native";

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 15;
  FONT_HEADING = 15;
}
const CommonHeadingText = ({ headingText, SubheadingText }) => {
  return (
    <View style={style.content__box}>
      <Text style={style.contain_heading_text}> {headingText}</Text>
      <Text style={style.content__auther_text}> {SubheadingText} </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  content__box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contain_heading_text: { fontSize: FONT_BACK_LABEL+10, color: "black",fontFamily: "BebasNeue-Regular",letterSpacing:1 },
  content__auther_text: { color: "grey", fontSize: FONT_HEADING ,fontFamily: "Khula-Regular",letterSpacing:0,textAlign:"justify"},
});

export default CommonHeadingText;
