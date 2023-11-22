import React from 'react'
import { View,StyleSheet,Image} from 'react-native'

export default function TimeContainer() {
    return (
        <View style={styles.container}>

            <View style={[styles.innerbox,styles.box1]}>
                <Image source={require("../../../assets/images/time/TIME.png")}></Image>
            </View>
             <View style={[styles.innerbox,styles.box2]}>
             <Image source={require("../../../assets/images/time/10mins.png")}></Image>


            </View>
             <View style={[styles.innerbox,styles.box3]}>
             <Image source={require("../../../assets/images/time/20mins.png")}></Image>


            </View>
             <View style={[styles.innerbox,styles.box4]}>
             <Image source={require("../../../assets/images/time/20mins.png")}></Image>


            </View>
             <View style={[styles.innerbox,styles.box5]}>
             <Image source={require("../../../assets/images/time/ALL.png")}></Image>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        // backgroundColor:"red",
        flexDirection:"row",
        justifyContent:"space-around",

    },
    innerbox:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    box1:{

        
    },
    box2:{
        
    },
    box3:{
        
    },
    box4:{
        
    },
    box5:{
        
    }

    
})
