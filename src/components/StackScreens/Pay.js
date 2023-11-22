import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Heading from "../Common/Heading";
import { material } from "react-native-typography";

export default function Pay() {

  const [billingAddress,setBillingAddress]=useState({
    street:'',
    city:'',
    state:'',
    zip:''
  })

  return (
    <View style={style.container}>
      {/* <View style={style.heading}>
        <Heading name="Pay" />
      </View> */}
      <View style={style.para1}>
        <Text style={material.subheading}>Somadome session at </Text>
        <Text style={material.subheading}>MODRN SANCTUARY </Text>
        <Text style={[material.subheading]}>WEDNESDAY DECEMBER 9TH , 2020</Text>
        <Text style={material.subheading}>@ 4.30 PM </Text>
      </View>
      <View style={style.para2}>
        <Text style={material.subheading}>PAYMENT INFORMATION </Text>
        <Text style={material.subheading}>
          CC 3: ****2098 Exp Date: 01/21 cvv: 373{" "}
        </Text>
      </View>
        <View style={style.millingContainer}>
        <Text style={material.subheading,style.fontColor}>BILLING ADDRESS  </Text>
          <View style={{ flexDirection: "row" }}>
              <Text style={material.subheading,style.fontColor}>Street:   </Text>
              <TextInput
                          style={style.textInput}
                          // value={formState.username}
                          value={billingAddress.street}
                          onChangeText={(text)=>setBillingAddress({...billingAddress,street:text})}
                          // placeholder='Enter username'
                          // onBlur={props.handleBlur('username')}
              />
           
          </View>
          <View style={{flexDirection: "row" }}>
          
              <Text style={material.subheading,style.fontColor}>City:       </Text>
              <TextInput
                          style={style.textInput}
                          // value={formState.username}
                          value={billingAddress.city}
                          onChangeText={(text)=>setBillingAddress({...billingAddress,city:text})}
                          // placeholder='Enter username'
                          // onBlur={props.handleBlur('username')}
              />
           
            {/* <TextInput
              style={{ height: 30, margin: 2, borderWidth: 1, width: 150 }}
            /> */}
          </View>
          <View style={{  flexDirection: "row" }}>
          
              <Text style={material.subheading,style.fontColor}>State:     </Text>
              <TextInput
                           style={style.textInput}
                          // value={formState.username}
                          value={billingAddress.state}
                          onChangeText={(text)=>setBillingAddress({...billingAddress,state:text})}
                          // placeholder='Enter username'
                          // onBlur={props.handleBlur('username')}
              />
           
          </View>
          <View style={{ flexDirection: "row" }}>          
              <Text style={material.subheading,style.fontColor}>Zip:         </Text>
              <TextInput
                          style={style.textInput}
                          // value={formState.username}
                          value={billingAddress.zip}
                          onChangeText={(text)=>setBillingAddress({...billingAddress,zip:text})}
                          // placeholder='Enter username'
                          // onBlur={props.handleBlur('username')}
              />
           
          </View>
        </View>
      
      <View style={style.para3}>
        <Text style={[material.display1, { color: "rgb(37, 150, 190)" }]}>
          TOTAL: $30{" "}
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: "rgb(37, 150, 190)",
            marginTop: "10%",
          }}
          onPress={() => alert("This is demo")}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
            }}
          >
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(37, 150, 190)",
  },
  para1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  para2: {
    flex: 1,
    marginLeft: 50,
    // marginTop: 5,
    justifyContent: "center",
  },
  para3: {
    flex: 1,
    alignItems: "center",
    marginTop:40
  },
  millingContainer: {
    // marginTop: 10,
    marginLeft:50,
    // flex: 1,
  },
  fontColor:{
    color:'#7E7E7E',
    marginVertical:10
  },
  textInput:{
    width: '60%',color:'#7E7E7E', 
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});
