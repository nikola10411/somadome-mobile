import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
} from "react-native";
import { material, sanFranciscoWeights } from "react-native-typography";
import Icon from "react-native-vector-icons/FontAwesome";

const PostSession = ({ navigation }) => {
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
          <Text style={[styles.headingtext]}>
            {"YOUR SEASSION \n IS COMPLETE \n "}
            <Text style={sanFranciscoWeights.bold}> HOW WAS IT?</Text>
          </Text>
        </View>
        <View style={{ width: 200, marginTop: 20, flexDirection: "row" }}>
          <View>
            <Icon name="heart" size={30} color="rgba(52, 52, 52, 0.8)"></Icon>
          </View>
          <View>
            <Text style={[styles.paratext]}>ADD SEASSION TO FAVORITE</Text>
          </View>
        </View>
      </View>
      <View style={styles.para1}>
        <Text style={[styles.para1Text]}>
          Share your moments with out community and recive special gifts from
          Somedomes out in the world
        </Text>

        <View>
          <TextInput
            style={{
              height: 170,
              borderWidth: 1,
              backgroundColor: "white",
              marginTop: 60,
            }}
            value=""
            placeholder=""
          />
        </View>
      </View>
      <View style={styles.para2}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
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
            SHARE
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

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

export default PostSession;
