import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
} from 'react-native';

const Home = ({navigation}) => {
  let isPaired = false;
  let screen = 'USE'; // change screen if not paired
  if (isPaired) {
    screen = 'USE';
  }
  const imagePath = require('../../../assets/images/creative.png');

  return (
    <View style={styles.center}>
      <View style={styles.heading}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
          CHOOSE YOUR DOME
        </Text>
      </View>
      <View style={styles.mainContent}>
        <TouchableOpacity
          style={[styles.roundButton, styles.roundTop]}
          onPress={() => navigation.navigate(screen, {path: imagePath})}>
          {/* <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>DOMING AT HOME</Text> */}
          <View style={styles.circle}>
            <Image
              style={styles.images}
              source={require('../../../assets/images/home/HOME.png')}></Image>
            <View style={{alignItems: 'center', marginTop: 3}}>
              <Text style={styles.durationText}>MY</Text>
              <Text style={styles.durationText}>DOME</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundButton, styles.roundBottom]}
          onPress={() => navigation.navigate('FIND')}>
          <View style={styles.circle}>
            <Image
              style={[styles.domeImage]}
              source={require('../../../assets/images/home/DOME.png')}></Image>
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Text style={styles.durationText}>MARKET</Text>
              <Text style={styles.durationText}>DOME</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#b8b8bb',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.45,
  },
  roundButton: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  images: {
    width: 50,
    height: 50,
    overflow: 'visible',
  },
  domeImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    right: 7,
  },
  center: {
    flex: 1,
  },
  mainContent: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    letterSpacing: 3,
    fontFamily: 'BebasNeueBook',
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.36,
    height: Dimensions.get('window').width * 0.36,
    backgroundColor: '#77bec7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 15,
    marginTop: 1,
    color: 'white',
    fontFamily: 'BebasNeueBook',
  },

  roundTop: {paddingTop: '10%'},
  roundBottom: {paddingBottom: '10%'},
});

export default Home;
