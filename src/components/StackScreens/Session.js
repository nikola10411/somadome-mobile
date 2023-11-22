import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const Session = ({ navigation }) => {
    return(
        <SafeAreaView style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Session Screen</Text>

          <TouchableOpacity style={{ height:70,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("SessionPlayer")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to SessionPlayer</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Session;