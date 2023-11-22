import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Musicgrid({
  navigation,
  text,
  imagePath,
  iconName,
  textColor,
}) {
  const images = {
    creative: require("../../../assets/images/use/play_button_violet.png"),
    relaxed: require("../../../assets/images/use/play_button_light_blue.png"),
    focused: require("../../../assets/images/use/play_button_dark_blue.png"),
    energized: require("../../../assets/images/use/play_button_dark_blue.png"),
    recovered: require("../../../assets/images/use/play_button_green.png"),
  };
  const images2 = {
    creative: require("../../../assets/images/use/play_button_violet.png"),
    relaxed: require("../../../assets/images/use/play_button_light_blue.png"),
    focused: require("../../../assets/images/use/play_button_dark_blue.png"),
    energized: require("../../../assets/images/use/play_button_dark_blue.png"),
    recovered: require("../../../assets/images/use/play_button_green.png"),
  };

  const MUSIC_TYPE_MIND = {
    creative: require("../../../assets/images/use/mind_icon_violet.png"),
    relaxed: require("../../../assets/images/use/mind_icon_light_blue.png"),
    body: require("../../../assets/images/use/mind_icon_green.png"),
    focused: require("../../../assets/images/use/mind_icon_dark_blue.png"),
    energized: require("../../../assets/images/use/mind_icon_dark_blue.png"),
    recovered: require("../../../assets/images/use/mind_icon_green.png"),
  };
  const MUSIC_TYPE_BODY = {
    creative: require("../../../assets/images/use/body_icon_violet.png"),
    relaxed: require("../../../assets/images/use/body_icon_light_blue.png"),
    body: require("../../../assets/images/use/body_icon_green.png"),
    focused: require("../../../assets/images/use/body_icon_dark_blue.png"),
    energized: require("../../../assets/images/use/body_icon_dark_blue.png"),
    recovered: require("../../../assets/images/use/body_icon_green.png"),
  };
  const MUSIC_TYPE_SPIRIT = {
    creative: require("../../../assets/images/use/spirit_icon_violet.png"),
    relaxed: require("../../../assets/images/use/spirit_icon_light_blue.png"),
    body: require("../../../assets/images/use/spirit_icon_green.png"),
    focused: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
    energized: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
    recovered: require("../../../assets/images/use/spirit_icon_green.png"),
  };

  // const icons = {
  //   mind: require("../../../assets/images/MIND.png"),
  //   spirit: require("../../../assets/images/Dove.png"),
  //   body: require("../../../assets/images/BODY.png"),
  //   mindActive: require("../../../assets/images/MIND.png"),
  //   spiritActive: require("../../../assets/images/Dove.png"),
  //   bodyActive: require("../../../assets/images/BODY.png"),
  // };

  const icons = {
    mind: {
      creative: require("../../../assets/images/use/mind_icon_violet.png"),
      relaxed: require("../../../assets/images/use/mind_icon_light_blue.png"),
      body: require("../../../assets/images/use/mind_icon_green.png"),
      focused: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/mind_icon_green.png"),
    },
    spirit: {
      creative: require("../../../assets/images/use/spirit_icon_violet.png"),
      relaxed: require("../../../assets/images/use/spirit_icon_light_blue.png"),
      body: require("../../../assets/images/use/spirit_icon_green.png"),
      focused: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/spirit_icon_green.png"),
    },
    body: {
      creative: require("../../../assets/images/use/body_icon_violet.png"),
      relaxed: require("../../../assets/images/use/body_icon_light_blue.png"),
      body: require("../../../assets/images/use/body_icon_green.png"),
      focused: require("../../../assets/images/use/body_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/body_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/body_icon_green.png"),
    },
    mindActive: {
      creative: require("../../../assets/images/use/mind_icon_violet.png"),
      relaxed: require("../../../assets/images/use/mind_icon_light_blue.png"),
      body: require("../../../assets/images/use/mind_icon_green.png"),
      focused: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/mind_icon_green.png"),
    },
    spiritActive: {
      creative: require("../../../assets/images/use/spirit_icon_violet.png"),
      relaxed: require("../../../assets/images/use/spirit_icon_light_blue.png"),
      body: require("../../../assets/images/use/spirit_icon_green.png"),
      focused: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/spirit_icon_green.png"),
    },
    bodyActive: {
      creative: require("../../../assets/images/use/body_icon_violet.png"),
      relaxed: require("../../../assets/images/use/body_icon_light_blue.png"),
      body: require("../../../assets/images/use/body_icon_green.png"),
      focused: require("../../../assets/images/use/body_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/body_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/body_icon_green.png"),
    },
  };

  const GUIDED = [
    "CLARITY",
    "HEAL",
    "FIT",
    "ASPIRE",
    "MANIFEST",
    "LOVE",
    "RECLAIM",
  ];

  let innerText = "";
  let icon_name = "";
  const text_in_upper_case = text.toUpperCase();

  if (text) {
    if (GUIDED.includes(text_in_upper_case)) {
      innerText = text_in_upper_case + " (GUIDED)";
    } else {
      innerText = text_in_upper_case;
    }
    icon_name = text;
  }

  console.log("icon name is ", iconName, " image path is ,", imagePath);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Clarity", {
          navigation: navigation,
          title: innerText,
          musicName : text
        })
      }
    >
      <ImageBackground style={style.backgroundImage}>
        <View style={style.container}>
          <View style={style.box}>
            <View style={{ height: 40 }}>
              <Image
                style={style.IconImageMusic}
                source={images[imagePath]}
              ></Image>
              <View>
                <Text
                  style={{ color: textColor, fontSize: 10, paddingTop: -40 }}
                >
                  20 min
                </Text>
              </View>
            </View>
          </View>
          <View style={style.box1}>
            <Text style={[style.text, { color: textColor, fontFamily: "BebasNeueBook" ,fontSize : 16}]}>{innerText} </Text>
          </View>
          {(icon_name === "perform" && iconName == "mind" && (
            <View style={style.box2}>
              <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.0)",
                  flexDirection: "row",
                  // width : 200
                  // flex: 1,
                }}
                onPress={() =>
                  navigation.navigate("Clarity", {
                    navigation: navigation,
                    title: innerText,
                  })
                }
              >
                <Image
                  style={style.IconImageParaller}
                  source={icons[iconName][imagePath]}
                ></Image>
                <Image 
                  style={[style.IconImageParaller,{height : 35, width : 35, bottom : 5}]}
                  source={icons["body"][imagePath]}
                ></Image>
              </View>
            </View>
          )) || (
            <View style={style.box2}>
              <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.0)",
                  flexDirection: "row",
                  flex: 1,
                }}
                onPress={() =>
                  navigation.navigate("Clarity", {
                    navigation: navigation,
                    title: innerText,
                  })
                }
              >
                <Image
                  style={style.IconImage}
                  source={icons[iconName][imagePath]}
                ></Image>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    letterSpacing: 1,
  },
  backgroundImage: {
    // flex: 2,
    resizeMode: "cover", // or 'stretch'
    height: 80,
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "white",
    borderBottomWidth: 2,
    borderBottomColor : "#ebeef2",
    // shadowColor: "#D3D3D3",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 1,
    // shadowRadius: 1,
    // elevation: 1,
  },
  IconImage: {
    width: 30,
    height: "100%",
    resizeMode: "contain",
  },
  IconImageMusic: { width: 30, resizeMode: "contain", height: "100%" },
  IconImageParaller: {
    width: 30,
    height : 30,
    borderRadius : 0,
    resizeMode: "contain",
    // height: "100%",
    marginLeft: 10,
  },
});
