import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CommonHeadingText from "../Common/CommonHeadingText";

// const textContent = [{}];

const Help = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={{ height: 200 }}>
        <CommonHeadingText
          headingText="NEED HELP?"
          SubheadingText="CONTACT US. "
        />
        <CommonHeadingText headingText="CALL:" SubheadingText="[888]462-7655" />
        <CommonHeadingText
          headingText="EMAIL:"
          SubheadingText="SUPPORT@SOMEDOME.COM"
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Help;
