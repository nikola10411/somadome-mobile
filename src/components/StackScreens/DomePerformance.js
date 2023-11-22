import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { material } from "react-native-typography";
import { Button } from "react-native-elements";

const timeline = ["TODAY", "THIS WEEK", "THIS MONTH", "ALL"];

export default function DomePerformance() {
  const [currentSelected, setCurrentSetected] = useState("clear");
  const [currentSelectedIndex, setCurrentSetectedIndex] = useState(0);
  return (
    <View style={style.container}>
      <View style={style.upperParth}>
        <View style={style.Flex1}>
          <Text style={material.display1}>SESSION SOLD</Text>
        </View>

        <View style={{ flex: 5 }}>
          <ImageBackground
            style={style.SessionTodayImage}
            source={require("../../../assets/images/domeperformance/Ellipse.png")}
          >
            <Text style={material.display1}>{"4"}</Text>
            <Text style={material.display1}>{"Sessions"}</Text>
            <Text style={material.display1}>{"Today"}</Text>
          </ImageBackground>
        </View>
        <View style={[style.Flex1, style.DurationContainer]}>
          {timeline.map((val, index) => {
            let type = "clear";
            if (index == 0) {
              type = "solid";
            }
            return <CustomButtom title={val} key={index} type={type} />;
          })}
        </View>
      </View>
      <View style={style.Lowerpart}>
        <View style={{ flex: 0.2 }}>
          <Text style={material.display1}>TOP SESSIONS TODAY</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={[style.Flex1, { marginLeft: 30 }]}>
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/Layer1.png")}
              >
                <Text style={material.captionWhite}>{"1 "}</Text>
                <Text style={material.captionWhite}>{"Play"}</Text>
              </ImageBackground>
            </View>
            <View style={style.Flex1}>
              <View style={{ alignItems: "center" }}>
                <Text style={material.display1}>2.</Text>
                <Text>`ASPIRE</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={[style.Flex1, { marginLeft: 30 }]}>
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/perform-1.png")}
              >
                <Text style={material.captionWhite}>{"1 "}</Text>
                <Text style={material.captionWhite}>{"Play"}</Text>
              </ImageBackground>
            </View>
            <View style={style.Flex1}>
              <View style={{ alignItems: "center" }}>
                <Text style={material.display1}>1.</Text>
                <Text>`RECHARGE`</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={[style.Flex1, { flexDirection: "column", marginLeft: 30 }]}
            >
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/perform.png")}
              >
                <Text style={material.captionWhite}>{"2"}</Text>
                <Text style={material.captionWhite}>{"Plays"}</Text>
              </ImageBackground>
            </View>
            <View style={style.Flex1}>
              <View style={{ alignItems: "center" }}>
                <Text style={material.display1}>3.</Text>
                <Text>FOCUS</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const CustomButtom = ({ title, type }) => {
  return (
    <View style={style.ButtonContainer}>
      <Button
        style={style.durationButton}
        title={title}
        onPress={() => console.log("Button is pressed")}
        color="#841584"
        type={type}
        titleStyle={{
          fontSize: 12,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  upperParth: {
    flex: 1,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  Lowerpart: { flex: 1, justifyContent: "center", alignItems: "center" },
  Flex1: { flex: 1 },
  DurationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  SessionTodayImage: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  durationButton: {},
  ButtonContainer: {
    width: 110,
    height: 50,
    fontSize: 5,
  },
  imageRound: {
    width: 90,
    height: 90,
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
});
