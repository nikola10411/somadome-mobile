import React, {useEffect} from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDeviceToken} from 'react-native-device-info';

const Welcome = ({navigation}) => {
  const width = Dimensions.get('window').width;

  useEffect(() => {
    const getUserToken = async () => {
      let token = await AsyncStorage.getItem('token');
      if (token?.length > 0) {
        navigation.navigate('Home');
      }
    };
    getUserToken();
  }, []);

  const getUserToken = async () => {
    return await AsyncStorage.getItem('token');
  };
  return (
    <ImageBackground
      source={require('./1_FRONT_LOGIN.png')}
      style={styles.backgroundImage}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp('68%'),
        }}>
        {/* <View style={{justifyContent:"center",alignItems:"center" }}>
           <Text style={{ fontSize:50,fontWeight:'bold',color:"white" }}>somadome</Text>
          <Text style={{ fontSize:15,color:"white" }}>Your journey to the Present</Text>
          </View> */}

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
            height: 20,
          }}></View>

        <View>
          <TouchableOpacity
            style={{
              height: hp('10%'),
              width: wp('55%'),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(37, 150, 190)',
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                paddingTop: 12,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: hp('10%'),
              width: wp('55%'),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(37, 150, 190)',
              marginTop: hp('1.5%'),
            }}
            onPress={() => navigation.navigate('Registration')}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                paddingTop: 12,
              }}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
  },
});

export default Welcome;
