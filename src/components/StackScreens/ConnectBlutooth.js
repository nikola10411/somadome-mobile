import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { material } from "react-native-typography";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BleManager } from "react-native-ble-plx";
import { requestLocationPermission } from "../../Utills/requestPermission"; 

const manager = new BleManager();

export default function ConnectBluetooth(props) {
    const {navigation} = props;
    const [bluetoothState, setBluetoothState] = useState("PoweredOff");
    const [deviceId, setdeviceId] = useState("")

    useEffect(() => {
        const subscription = manager.onStateChange((state) => {
            if(state === "PoweredOn"){
                scanAndConnect();
                setBluetoothState(state);
                subscription.remove();
            }
        },true);
        return () => subscription.remove();
    },[manager])

    const scanAndConnect = async () => {
      const permission = await requestLocationPermission();
      if(permission){
        manager.startDeviceScan(null, null ,(error, device) => {
          if(error){
            console.log("error", error)
              return
          }
          if(device){
              console.log("Device scanned", device, device.name);
              setdeviceId(device.id);
          }
          device.connect()
          .then((device) => {
              return device.discoverAllServicesAndCharacteristics()
          })
          .then((device) => {
              console.log("Device characteristics",device)
          })
          .catch((err) => {
              console.log("Error",err)
          })
      })
      }
    }

    return (
    <View style={style.container}>
      <View style={style.heading}>
         <TouchableOpacity onPress={() => navigation.goBack()}> 
         <Image style={style.backIcon} source={require("../../../assets/images/back.png")} />
         </TouchableOpacity>
        <Text style={[material.display1, style.headingText, {marginLeft : wp("25%")}]}>
          CONNECT BLUE
        </Text>
      </View>
      <Text>Bluetooth Cuurent State : {bluetoothState}</Text>
      <Text>Scanned DeviceId : {deviceId}</Text>
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
});
