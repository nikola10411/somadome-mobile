import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { material } from "react-native-typography";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { FONT_BACK_LABEL, FONT_HEADING } from "../Common/DynamicFonts";

export default function PairDome({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.heading}>
         <TouchableOpacity onPress={() => navigation.goBack()}> 
         <Image style={style.backIcon} source={require("../../../assets/images/back.png")} />
         </TouchableOpacity>
        <Text style={[material.display1, style.headingText, {marginLeft : wp("25%")}]}>
          PAIR DOME
        </Text>
      </View>
      <View style={style.para1}>
        <Text style={[material.subheading, style.margin,{textAlign : "center"}]}>
          It appears this is your first seassion in this dome, so let's pair your phone.
        </Text>
      </View>
      <View style={style.para2}>
        <Text style={[material.subheading, style.margin, {textAlign : "center"}]}>
          Please stand near the dome, select your dome, and click "connect".
        </Text>
      </View>
      <View style={style.para3}>
        <Text style={[material.subheading, style.marginTop]}>Select Dome:</Text>
        <Text style={[material.button, style.marginTop1]}>MODRN SANCTUARY </Text>
      </View>
      <View style={style.para3}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: "#85D0DA",
            marginTop: "0%",
          }}
          onPress={() => navigation.navigate("ConnectBluetooth")}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
              fontFamily: "Khula-Regular"
            }}
          >
            CONNECT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  para1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  para3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para4: {},
  margin: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: FONT_BACK_LABEL-5,
    color: "grey",
    fontFamily:"Khula-SemiBold",
    letterSpacing:1
    
  },
  marginTop: {
    marginTop: 10,
    letterSpacing: 1,
    color: "grey",
    fontFamily: "Khula-Regular",
    fontSize:17 
  },
  marginTop1: {
    marginTop: 10,
    letterSpacing: 1,
    color: "grey",
    fontFamily: "Khula-Bold",
    fontSize:15 
  },
});
