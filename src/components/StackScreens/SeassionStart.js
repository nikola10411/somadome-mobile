import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { material, sanFranciscoWeights } from "react-native-typography";

export default function SeassionStart({ navigation }) {
  return (
    // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' }}>
    //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Post Session Screen</Text>

    //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
    //                     onPress={()=>navigation.navigate("Community")}>
    //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Community</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>

    <ImageBackground
      source={require("../Auth/welcome.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.heading}>
        <View style={{ width: 200, marginTop: 20 }}>
          <Text style={[material.headlineWhite]}>
            {"YOUR SEASSION \n IS STARTING \n  SOON"}
          </Text>
        </View>
      </View>
      <View style={styles.para1}>
        <Text style={[material.headlineWhite]}>
          It apperas you have not yet selected your session. Now is a great time
          to get in tune with yourslef and find what resonates most in this
          moment
        </Text>
      </View>
      <View style={styles.para2}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 190,
            backgroundColor: "rgb(37, 150, 190)",
            marginTop: "10%",
          }}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
            }}
          >
            SELECT SEASSION
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    flexDirection: "column",
  },
  heading: {
    flex: 0.5,
    alignItems: "center",
  },
  para1: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
  },
  para2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingtext: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 0,
    width: 200,
    color: "white",
  },
  paratext: {
    fontSize: 15,
    color: "white",
    marginLeft: 10,
  },
  para1Text: {
    color: "white",
    marginTop: 30,
  },
});
