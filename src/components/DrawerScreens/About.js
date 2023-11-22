import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const About = () => {
    return(
        <SafeAreaView style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>About Screen</Text>
        </SafeAreaView>
    )
}
export default About;