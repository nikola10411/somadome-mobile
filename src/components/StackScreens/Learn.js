import React from "react";
import { StyleSheet, Text, View, PixelRatio, ScrollView } from "react-native";
import { material } from "react-native-typography";
import Feel from "../Common/Feel";
import FeelTypes from "../Common/FeelTypes";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var FONT_BACK_LABEL = 15;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 8;
  FONT_HEADING = 23;
}

const Learn = ({ navigation }) => {
  return (
    // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' ,flex:1}}>
    //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Learn Screen</Text>
    //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
    //                     onPress={()=>navigation.navigate("Intentions")}>
    //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>

    <View style={style.container}>
      <View style={style.heading}>
        <View>
          <Text style={[material.headlineWhite, style.mainHeadingText]}>
            LEARN
          </Text>
        </View>
      </View>
      {/* <View style={style.subheading}>
        <View style={style.box}>
          <FeelTypes imageType="image1" text={"  CLASSIC\nMEDITATION"} />
        </View>
        <View style={[style.box, style.boxBorder]}>
          <FeelTypes imageType="image2" text={" SOUND\nHEALING"} />
        </View>
        <View style={[style.box, style.boxBorder]}>
          <FeelTypes imageType="image3" text={"SOMADOME\n   SESSION"} />
        </View>
        <View style={[style.box, style.boxBorder]}>
          <FeelTypes imageType="image4" text={"BREATHWORK"} />
        </View>
      </View> */}
      <ScrollView style={style.content}>
        {/* { need to use map here later } */}
        <View style={style.content__box}>
          <Text style={style.Learn_heading}> WHAT IS MEDITATION?</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text style={style.Learn_heading}> WHAT IS SOUND HEALING?</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text style={style.Learn_heading}> WHAT IS BREATH?</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text style={style.Learn_heading}> THE HEALING POWER OF SOUND</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text style={style.Learn_heading}> THE HISTORY OF BREATHWORK</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  heading: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B79E9",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  // subheading: {
  //   flex: 1,
  //   flexDirection: "row",
  // },
  content: { flex: 4, flexDirection: "column", flexGrow: 4 },
  heading__content: {},
  box: {
    flex: 1,
    backgroundColor: "#6c64c3",
  },
  boxBorder: {
    borderLeftWidth: 1,
    borderLeftColor: "white",
  },
  content__box: {
    borderBottomWidth: 1,
    borderBottomColor: "#F9F9F9",
    flex: 1,
    marginLeft: 30,
    marginRight: 90,
    marginTop: 30,
    paddingBottom: 20,
  },
  content__auther_text: { color: "grey", fontSize: 17,fontFamily: "BebasNeue-Book" },
  mainHeadingText: { fontSize: FONT_HEADING+19,fontFamily: "BebasNeue-Book"},
  subHeadingText: {
    fontSize: FONT_BACK_LABEL,
    fontWeight: "400",
    letterSpacing: 1,
  },
  Learn_heading: {
    fontSize: 19,
    fontFamily: "BebasNeue-Book",
    fontWeight : "normal",
    color : "gray"
  },
});

export default Learn;