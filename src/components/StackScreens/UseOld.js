import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Feel from "../Common/Feel";

const UseOld = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Feel
          navigation={navigation}
          feeling="Relaxed"
          imagePath="relaxed"
        ></Feel>
        <Feel
          navigation={navigation}
          feeling="Energized"
          imagePath="energized"
        ></Feel>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Feel
          navigation={navigation}
          feeling="Recovered"
          imagePath="recovered"
        ></Feel>
        <Feel
          navigation={navigation}
          feeling="Creative"
          imagePath="creative"
        ></Feel>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Feel
          navigation={navigation}
          feeling="Rested"
          imagePath="relaxed"
        ></Feel>
        <Feel
          navigation={navigation}
          feeling="Focused"
          imagePath="energized"
        ></Feel>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Feel
          navigation={navigation}
          feeling="Grateful"
          imagePath="creative"
        ></Feel>
        <Feel
          navigation={navigation}
          feeling="Vital"
          imagePath="recovered"
        ></Feel>
      </View>
    </View>
  );
};

export default UseOld;
