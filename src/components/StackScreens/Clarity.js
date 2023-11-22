import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  ScrollView,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { material } from "react-native-typography";
import { getMusicDescription } from "../../Utills/musicDescription";

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 20;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 12;
  FONT_HEADING = 15;
}

export default function Clarity({ navigation }) {
  const title = navigation.state.params.title || "CLARITY";
  const musicName = navigation.state.params.musicName || "Clarity";
  return (
    <View style={style.container}>
      <View style={style.heading}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={style.backIcon}
          source={require("../../../assets/images/back.png")} />
        </TouchableOpacity>
        <Text style={[material.display1, style.headingText, { marginLeft: wp("15%") }]}>BACK TO LIBRARY</Text>
      </View>
      {/* <View style={[style.heading, style.center]}>
        <Text style={style.text}>{title}</Text>
      </View> */}
      <View style={style.center}>
        <Text style={style.subHeading}>
          {title}
        </Text>
        <View style={style.circle}>
          <Image
            source={require("../../../assets/images/somadomewhite.png")}
          ></Image>
          <View>
            <Text style={style.durationText}>20 MINS</Text>
          </View>
        </View>
      </View>
      <View style={[style.center,{marginTop : hp("2%")}]}>
        <View style={{ flexDirection: "row", color: "blue", alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate("MusicPlayerScreen",{title: title, musicName : musicName})}>
            <Image style={{height: 40, width : 40}}
               source={require("../../../assets/images/play_button_light_blue.png")}></Image>
          </TouchableOpacity>
          <Text style={[style.subHeading, { marginLeft: wp("2%") }]}>
            BEGIN SESSION
          </Text>
        </View>
      </View>
      <ScrollView style={style.paragraph}>
        <Text style={style.paratext}>
          {getMusicDescription(musicName)}
          {/* This guided meditation uses Theta and spoken meditation to encourage
          you to look into your heart to discover the purest, deepest intentions
          for your life. Theta waves erase thoughts of lack or limitation.
          This guided meditation uses Theta and spoken meditation to encourage
          you to look into your heart to discover the purest, deepest intentions
          for your life. Theta waves erase thoughts of lack or limitation. */}
        </Text>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  heading: {
    flexDirection: "row",
    height: hp("10%"),
    alignItems: "center",
    backgroundColor: "#b8b8bb",
  },
  headingText: {
    color: "white",
    fontFamily: "BebasNeueBook"
  },
  backIcon: {
    height: 30,
    width: 17,
    marginLeft: wp("8%")
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop : hp("5%")
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    backgroundColor: "#e2e6e7",
    justifyContent: "center",
    alignItems: "center",
    marginTop : hp("3%")
  },
  durationText: {
    marginTop: 10,
    letterSpacing: 2,
  },
  text: {
    fontSize: FONT_HEADING,
    color: "grey",
  },
  paragraph: {
    paddingLeft: wp("12%"),
    paddingRight: wp("12%"),
    marginTop : hp("5%"),
    textAlign : "center",
  },
  paratext: {
    fontSize: 14,
    color: "grey",
    fontFamily : "Khula-Regular",
    textAlign : 'center'
  },
  subHeading: {
    fontSize: 24,
    fontFamily: "BebasNeue-Book",
    color : 'gray'
  }
});
