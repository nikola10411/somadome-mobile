import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  PixelRatio,
} from "react-native";
import { Avatar } from "react-native-paper";
import { material } from "react-native-typography";
import SessionCount from "../../Common/SessionCount";
import { normalize } from "../../Common/DynamicFonts";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 15;
  FONT_HEADING = 6;
}

const Profile = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.heading}>
         <TouchableOpacity onPress={() => navigation.goBack()}> 
         <Image style={style.backIcon} source={require("../../../../assets/images/back.png")} />
         </TouchableOpacity>
        <Text style={[material.display1, style.headingText2, {marginLeft : wp("26%")}]}>
          Profile
        </Text>
      </View>
      <View style={style.profile}>
        <View
          style={{
            justifyContent: "center",
            // alignItems: 'center',
            marginTop: 7,
            marginBottom: 12,
            flexDirection: "row",
          }}
        >
          <Avatar.Image
            source={require("../../../../assets/images/userProfileEdit/AVATARICON.png")}
            size={80}
            style={{ backgroundColor: "white" }}
          />
        </View>
        <View>
          <Text style={[material.subheading, style.headingText]}>
            Nick Fresno
          </Text>
        </View>
        <View>
          <Text style={[material.subheading, { color: "grey",fontSize:13 }]}>
            Live, laugh, love.
          </Text>
        </View>
      </View>
      <View style={style.sessionsContent}>
        <View style={style.sessionStartContainer}>
          <SessionCount
            text="SESSIONS THIS MONTH"
            count="4"
            customeStyle={{ backgroundColor: "#717aa1"}}
          />
          <SessionCount
            text="TOTAL SESSIONS"
            count="123"
            customeStyle={{  backgroundColor: "#5869b7" }}
          />
        </View>
        <View style={style.sessionStartContainer}>
          <SessionCount
            text="CONSECUTIVE DAYS"
            subheading="(CURRENT)"
            count="3"
            customeStyle={{ backgroundColor: "#49ab9d" }}
          />
          <SessionCount
            text="CONSECUTIVE DAYS"
            subheading="(BEST)"
            count="18"
            customeStyle={{ backgroundColor: "#80ddd3" }}
          />
        </View>
      </View>
      <View style={style.sessionsHistoryContent}>
        <Text style={[{ fontSize: FONT_BACK_LABEL, color: "white" }]}>
          SESSION HISTORY
        </Text>
      </View>
      <View style={style.bottom}>
        <Text style={style.bottomText}>
          YOU COMPLETED <Text style={{ fontSize: 18 }}>MANIFEST</Text> ON MARCH
          30{" "}
        </Text>
        <Text style={style.bottomText}>
          YOU COMPLETED <Text style={{ fontSize: 18 }}>FOCUS</Text> ON MARCH 30{" "}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  heading: {
    flexDirection : "row",
    height : hp("10%"),
    alignItems : "center",
    backgroundColor: "#b8b8bb",
  },
  headingText2: {
    color: "white",
    fontFamily : "BebasNeueBook",
  },
  backIcon : {
    height : 30, 
    width : 17,
    marginLeft : wp("8%")
  },
  profile: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sessionsContent: { flex: 1 },
  sessionsHistoryContent: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",     
    backgroundColor: "lightgray",
    marginTop: 20,
  },
  bottom: { flex: 0.5, justifyContent: "center", alignItems: "center" },
  sessionStartContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flex1: { flex: 1, justifyContent: "center", alignItems: "center" },
  headingText: { color: "grey", letterSpacing: 2,fontFamily: "Khula-Regular",fontSize:19},
  bottomText: {
    color: "grey",
    letterSpacing: 1,
    fontSize: normalize(FONT_HEADING)-5,
  },
  bottomTextHeading: {
    fontSize: normalize(FONT_BACK_LABEL),
  },
});

export default Profile;
