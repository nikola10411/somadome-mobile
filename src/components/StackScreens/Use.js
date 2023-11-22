import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  PixelRatio,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import Feeltype from "../Common/Feeltype";
import FeelTypes from "../Common/FeelTypes";
import Musicgrid from "../Common/Musicgrid";
// import TimeContainer from "../Common/TimeContainer";
import {
  feelTypesBody,
  feelTypesMind,
  feelTypesSpirit,
} from "../Common/Constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from "react-native-typography";

var FONT_BACK_LABEL = 12;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 10;
  FONT_HEADING = 10;
}

const MindGrids = [
  { text: "Clarity", imagePath: "relaxed", colorCode: "#82e6f2" },
  { text: "Create", imagePath: "creative", colorCode: "#cc47ae" },
  { text: "Focus", imagePath: "focused", colorCode: "#1283ba" },
  { text: "Succeed", imagePath: "focused", colorCode: "#1283ba" },
  { text: "Relaxed", imagePath: "relaxed", colorCode: "#82e6f2" },
  { text: "Motivate", imagePath: "focused", colorCode: "#1283ba" },
  { text: "Perform", imagePath: "recovered", colorCode: "#70a65d" },
  { text: "Confidence", imagePath: "focused", colorCode: "#1283ba" },
];

const BodyGrids = [
  { text: "Perform", imagePath: "recovered", colorCode: "#70a65d" },
  { text: "Recharge", imagePath: "relaxed", colorCode: "#82e6f2" },
  { text: "Relax", imagePath: "relaxed", colorCode: "#82e6f2" },
  { text: "Snooze", imagePath: "relaxed", colorCode: "#82e6f2" },
  { text: "Heal", imagePath: "recovered", colorCode: "#70a65d" },
  { text: "Overcome", imagePath: "recovered", colorCode: "#70a65d" },
  { text: "Fit", imagePath: "recovered", colorCode: "#70a65d" },
  { text: "Confidence", imagePath: "focused", colorCode: "#1283ba" },
];

const SpiritGrids = [
  { text: "Ascend", imagePath: "creative", colorCode: "#cc47ae" },
  { text: "Aspire", imagePath: "focused", colorCode: "#1283ba" },
  { text: "Bliss", imagePath: "creative", colorCode: "#cc47ae" },
  { text: "Manifest", imagePath: "creative", colorCode: "#cc47ae" },
  { text: "Love", imagePath: "creative", colorCode: "#cc47ae" },
  { text: "Reclaim", imagePath: "creative", colorCode: "#cc47ae" },
  { text: "Prosper", imagePath: "recovered", colorCode: "#70a65d" },
  { text: "Overcome", imagePath: "recovered", colorCode: "#70a65d" },
];

const TRACKS = {
  mind: MindGrids,
  body: BodyGrids,
  spirit: SpiritGrids,
  mindActive: MindGrids,
  bodyActive: BodyGrids,
  spiritActive: SpiritGrids,
};

const Use = ({ navigation }) => {
  const [iconName, seticonName] = useState("mind");
  const [grid, setGrid] = useState("mind");
  const [feelTypesArray, setFeeltypesArray] = useState(feelTypesMind);
  return (
    <View style={style.container}>
       <View style={style.heading}>
         <TouchableOpacity onPress={() => navigation.goBack()}> 
         <Image style={style.backIcon} source={require("../../../assets/images/back.png")} />
         </TouchableOpacity>
        <Text style={[material.display1, style.headingText, {marginLeft : wp("30%")}]}>
          USE
        </Text>
      </View>
      <View style={style.typeContainer}>
        <View style={style.TypeLeft}>
          <View style={style.TypeLeft__Text}>
            <Text style={style.TypeText}
              numberOfLines={1}>WHAT NEEDS YOUR ATTENTION ? </Text>
          </View>
          <View style={style.TypeLeft__icons}>
            {feelTypesArray.map((item, index) => {
              return (
                <Feeltype
                  key={index}
                  imageType={item.imageType}
                  text={item.text}
                  seticonName={seticonName}
                  setGrid={setGrid}
                  setFeelTypeArray={setFeeltypesArray}
                />
              );
            })}
          </View>
        </View>
        <View style={style.lineStyle} />
        <View style={style.TypeRight}>
          <Feeltype
            imageType="lock"
            text={"BREATHWORK"}
            navigation={navigation}
          />
        </View>
      </View>
      <ScrollView style={{ flex: 4, flexGrow: 4 }}>
        {TRACKS[grid].map((item, index) => {
          return (
            <View style={style.create} key={index}>
              <Musicgrid
                navigation={navigation}
                text={item.text}
                imagePath={item.imagePath}
                iconName={iconName}
                textColor={item.colorCode}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  heading: {
    flexDirection : "row",
    height : hp("10%"),
    alignItems : "center",
    backgroundColor: "#b8b8bb",
  },
  headingText: {
    color: "white",
    fontFamily : "BebasNeueBook"
  },
  backIcon : {
    height : 30, 
    width : 17,
    marginLeft : wp("8%")
  },
  typeContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft : wp("4%"),
    paddingRight : wp("4%")
  },
  TypeRight: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
  },
  TypeLeft: {
    flexDirection: "column",
  },
  TypeLeft__icons: {
    flex : 1,
    flexDirection: "row",
  },
  TypeLeft__Text: { 
    height : hp("4%"),
    justifyContent: "center",
    paddingLeft : wp("2%"),
   },
  TypeText: { color: "#b8b8bb", letterSpacing: 1, fontSize: FONT_BACK_LABEL },
  time: {
    flex: 1,
    backgroundColor: "white",
  },
  create: {
    flex: 1,
    backgroundColor: "white",
  },
  manifest: {
    flex: 1,
    backgroundColor: "grey",
  },
  love: {
    flex: 1,
    backgroundColor: "pink",
  },
  lineStyle : {
    height : hp("13%"),
    borderWidth : 1,
    borderColor : "#b8b8bb",
    marginTop : hp("2%")
  }
});

export default Use;
