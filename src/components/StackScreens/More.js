import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {material} from 'react-native-typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import {logoutUser} from '../../services/loginService';
import {GetFontSize} from '../../Utills/commonUtills';
import MoreCommon from '../Common/MoreCommon';
const moreTitles = [
  //contains Title in first index and navigate screen name in second index
  ['PROFILE', 'PROFILE'],
  // ["SOMADOME BOOKING", "Book"],
  // ["SUBSCRIPTION & PAYMENT", "Pay"],
  // ["PERFORMANCE", "DomePerformance"],
  ['DOME PAIR', 'PAIRDOME'],
  ['HELP & SUPPORT', 'HELP'],
  ['TERMS & CONDITIONS', 'TermsServices'],
  ['LOGOUT', 'Login'],
];

export default function More({navigation}) {
  const dispatch = useDispatch();
  const NavigateHandler = title => {
    if (title === 'Login') {
      AsyncStorage.removeItem('token');
      dispatch(logoutUser());
      navigation.navigate('Login');
    } else {
      navigation.navigate(title);
    }
  };
  return (
    <View style={style.contianer}>
      <View style={style.heading}>
        <Text style={[material.headlineWhite, style.headingText]}>MORE</Text>
      </View>
      <View style={style.mainContent}>
        {moreTitles.map((val, index) => {
          return (
            <MoreCommon
              key={index}
              heading={val}
              NavigateHandler={NavigateHandler}
            />
          );
        })}

        {/* <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} /> */}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  contianer: {flex: 1, backgroundColor: 'white'},
  heading: {
    flex: 0.1,
    backgroundColor: '#b8b8bb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 0.5,
    marginLeft: 30,
    marginRight: 90,
    marginTop: 20,
  },
  headingText: {
    fontSize: GetFontSize() + 9,
    fontFamily: 'BebasNeue-Book',
  },
});
