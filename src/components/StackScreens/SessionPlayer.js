import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const SessionPlayer = ({ navigation }) => {
    return(
        <SafeAreaView style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Session Player Screen</Text>
          <TouchableOpacity style={{ height:70,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("PostSession")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Post Session</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SessionPlayer;