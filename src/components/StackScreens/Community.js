import React from 'react';
import {
  Text,
  // SafeAreaView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  PixelRatio,
  Dimensions,
} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import DeviceInfo from 'react-native-device-info';
import {material} from 'react-native-typography';
import {GetFontSize} from '../../Utills/commonUtills';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var FONT_BACK_LABEL = 10;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 8;
  FONT_HEADING = 9;
}
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const isNotch = DeviceInfo.hasNotch();

const Userdata = [
  {
    image: require('../../../assets/images/community/tashaFrame.png'),
    review: `Tasha in Houston, TX just completed the, "FOCUS"`,
  },
  {
    image: require('../../../assets/images/community/sarahFrame.png'),
    review: `Joan in New York, NY just completed the, "RECHARGE"`,
  },
  {
    image: require('../../../assets/images/community/markFrame.png'),
    review: `Mark in Los Angeles, CA just completed the, "CLARITY"`,
  },
];

const Community = ({navigation}) => {
  return (
    <SafeAreaView style={style.contianer}>
      <View style={style.heading}>
        <Text style={[material.headlineWhite, style.headingText]}>
          COMMUNITY
        </Text>
      </View>
      <View style={style.ActivitySection}>
        <Text style={style.activityHeaderTxt}>ACTIVITY</Text>
        {Userdata.map((item, index) => {
          let isBorder = true;
          if (index === Userdata.length - 1) {
            isBorder = false;
          }
          return (
            <Activity
              key={index}
              text={item.review}
              imageType={item.image}
              isBorder={isBorder}
            />
          );
        })}
      </View>
      <View style={style.TopRatedSecion}>
        <Text style={style.text} numberOfLines={1}>
          TOP RATED SESSIONS THIS WEEK
        </Text>
        <View
          style={{
            flex: isNotch ? 0.6 : 0.8,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View style={{flex: 0.75, flexDirection: 'column', marginTop: '5%'}}>
            <View style={style.flex1}>
              <ImageBackground
                style={style.imageRound}
                source={require('../../../assets/images/community/Layer1.png')}>
                <Text style={[material.captionWhite, style.Playtext]}>
                  {'175'}
                </Text>
                <Text
                  style={[
                    material.captionWhite,
                    style.playsText,
                    {fontSize: RFValue(14)},
                  ]}>
                  {'PLAYS'}
                </Text>
              </ImageBackground>
            </View>
            <View style={[{marginTop: '15%'}]}>
              <View
                style={{
                  alignItems: 'center',
                  marginRight: '15%',
                  marginTop: '70%',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontFamily: 'BebasNeue-Book',
                    fontSize: RFPercentage(5),
                    fontWeight: '400',
                  }}>
                  2.
                </Text>
              </View>
              <Text style={style.activityBubbleText}>'DEEP RELAXATION'</Text>
              <Text style={[style.activityBubbleText, {marginHorizontal: 5}]}>
                SOUND HEALING
              </Text>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 4}}>
            <View style={style.flex1}>
              <ImageBackground
                style={style.imageRoundBig}
                source={require('../../../assets/images/community/perform-1.png')}>
                <Text style={[material.captionWhite, style.bigBubbleText]}>
                  {'250'}
                </Text>
                <Text style={[material.captionWhite, style.bigBubbleText]}>
                  {'PLAYS'}
                </Text>
              </ImageBackground>
            </View>
            <View style={[{flex: 0.3}]}>
              <View
                style={{
                  alignItems: 'center',
                  marginRight: '15%',
                  marginTop: '3%',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontFamily: 'BebasNeue-Book',
                    fontSize: RFPercentage(5),
                    fontWeight: '400',
                  }}>
                  1.
                </Text>
              </View>
              <Text
                style={[style.activityBubbleText, {marginTop: 10, left: 15}]}>
                'INCREASE ENERGY'
              </Text>
              <Text
                style={[
                  style.activityBubbleText,
                  {marginHorizontal: 10, left: 15},
                ]}>
                BREATHWORK
              </Text>
            </View>
          </View>
          <View style={{flex: 0.6, flexDirection: 'column', marginTop: '5%'}}>
            <View style={[style.flex1]}>
              <ImageBackground
                style={style.imageRound}
                source={require('../../../assets/images/community/perform.png')}>
                <Text style={[material.captionWhite, style.Playtext]}>
                  {'123'}
                </Text>
                <Text
                  style={[
                    material.captionWhite,
                    style.playsText,
                    {fontSize: RFValue(14)},
                  ]}>
                  {'PLAYS'}
                </Text>
              </ImageBackground>
            </View>
            <View style={[{marginTop: '25%'}]}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '80%',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontFamily: 'BebasNeue-Book',
                    fontSize: RFPercentage(5),
                    fontWeight: '400',
                  }}>
                  3.
                </Text>
              </View>
              <Text
                style={[style.activityBubbleText, {right: 20, width: '200%'}]}>
                'ATTRACT INTENTIONS'
              </Text>
              <Text style={[style.activityBubbleText]}>MEDIATATION</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

function Activity({text, imageType, isBorder}) {
  let borderWidth = 1;
  if (!isBorder) {
    borderWidth = 0;
  }

  return (
    <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <Image style={style.image} source={imageType}></Image>
      </View>
      <View
        style={{
          flex: 1,
          borderBottomColor: '#F9F9F9',
          borderBottomWidth: borderWidth,
          justifyContent: 'center',
          marginLeft: 4,
        }}>
        <Text style={style.activitytext}>{text}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  contianer: {flex: 1},
  heading: {
    flex: 0.3,
    backgroundColor: '#b8b8bb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ActivitySection: {
    flex: 1.2,
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 30,
    color: '#b8b8bb',
  },
  TopRatedSecion: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 30,
    marginTop: 5,
  },
  flex1: {flex: 1},
  image: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  imageRound: {
    width: SCREEN_WIDTH * 0.22,
    height: SCREEN_WIDTH * 0.22,
    borderRadius: (SCREEN_HEIGHT * 0.15) / 2,
    overflow: 'hidden',
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageRoundBig: {
    width: SCREEN_WIDTH * 0.32,
    height: SCREEN_WIDTH * 0.32,
    borderRadius: (SCREEN_HEIGHT * 0.25) / 2,
    overflow: 'hidden',
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    letterSpacing: 2,
    fontSize: wp("6%"),
    color: '#686767',
    fontFamily: 'BebasNeue-Regular',
    // fontWeight: '400',
  },
  activitytext: {
    fontSize: RFValue(10),
    color: '#8d8d8e',
    fontWeight: '500',
    fontFamily: 'Khula-Regular',
  },
  Playtext: {
    fontSize: RFValue(20, SCREEN_HEIGHT),
    fontWeight: 'bold',
    fontFamily: 'BebasNeue-Book',
    lineHeight: 30,
    letterSpacing: 2,
  },
  playsText: {
    fontSize: RFValue(24, SCREEN_HEIGHT),
    fontWeight: 'bold',
    fontFamily: 'BebasNeue-Book',
    letterSpacing: 2,
    lineHeight: 16,
  },
  bigBubbleText: {
    fontSize: RFValue(25, SCREEN_HEIGHT),
    fontWeight: 'bold',
    fontFamily: 'BebasNeue-Book',
    lineHeight: 30,
    letterSpacing: 2,
  },
  headingText: {
    fontSize: RFPercentage(4),
    fontFamily: 'BebasNeue-Book',
    fontWeight: '200',
    letterSpacing: 3,
  },
  activityHeaderTxt: {
    marginTop: 20,
    color: '#686767',
    fontSize: RFPercentage(4),
    fontFamily: 'BebasNeue-Regular',
    // fontWeight: '400',
    letterSpacing: 1,
  },
  activityBubbleText: {
    fontSize: RFValue(8),
    color: '#515152',
    fontWeight: '500',
    fontFamily: 'raleway-regular',
  },
});
export default Community;
