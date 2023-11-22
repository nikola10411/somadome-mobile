import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking,
  PixelRatio,
  Dimensions,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import {material} from 'react-native-typography';
import MapView, {Marker} from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';

import SearchableDropdown from '../Common/SearchableDropdown';
// import locationList from '../../../assets/locationList.json';
import {
  locationListFailure,
  locationListRequest,
  locationListServiceApi,
  locationListSuccess,
} from '../../services/locationListService';

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 25;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 10;
  FONT_HEADING = 15;
}
const isAndroid = Platform.OS === 'android';
const key = 'uniqueMarkerKey';
const markerImage = require('../../../assets/somadome.png');

const initialLocation = {
  id: 6,
  businessName: 'Modrn Sanctuary',
  businessAddress: '12 W 27th St 9th floor, New York, NY 10001',
  website: 'https://www.modrnsanctuary.com/',
  phoneNumber: '+1 212-675-9355',
  bookingLink:
    'https://dashboard.boulevard.io/booking/businesses/e8eca8b4-8202-4261-8e90-dc9a26181077/widget#/cart/menu/Somadome%20Meditation%20Pod/s_e1a88a4a-1a86-4d35-bdd3-892cbc4ade95',
  photoLink:
    'https://images.squarespace-cdn.com/content/v1/5c05dab055b02cfb5a8b5494/1614966147960-TBT08G3QKS7QV169ID34/Somadome+Mediation+Modrn+Sanctuary?format=1500w',
  comments: null,
  latitude: null,
  longitude: null,
};
const FindDome = ({navigation}) => {
  // const [latitude,setLatitude] = useState(40.744516);
  // const [longitude,setLongitude] = useState(-73.989325);
  // const [businessName,setBusinessName] = useState("MODERN SANCTUARY");
  // const [streetAddress,setStreetAddress] = useState("12 W 27th St 9th floor");
  // const [stateAddress,setStateAddress] = useState("New York ,NT 1000");
  // const [website,setWebsite] = useState("www.modernsanctury.com");
  // const [phoneNumber,setPhoneNumber] = useState("(212) 675-9355");
  const [location, setLocation] = useState(initialLocation);
  const [locationList, setLocationList] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationListRequest());
    getLocationValues();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setLocation(crd);
      // console.log('currentLocation', crd);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const getLocationValues = async () => {
    await locationListServiceApi()
      .then(response => {
        // console.log('response-->', response.data);
        // await AsyncStorage.setItem('key', value)
        dispatch(locationListSuccess(response.data));
        setLocationList(response.data);
      })
      .catch(error => {
        console.log('Error', error);
        // Alert.alert('Error while logging in');
        dispatch(locationListFailure(error.response.data));
      });
  };
  return (
    // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' ,flex:1}}>
    //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Find Dome Screen</Text>
    //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
    //                     onPress={()=>navigation.navigate("Intentions")}>
    //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>

    <View style={styles.container}>
      <View style={styles.heading}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/images/back.png')}
        />
        <Text
          style={[
            material.display1,
            styles.headingText,
            {marginLeft: wp('17%')},
          ]}>
          FIND A DOME
        </Text>
      </View>
      <View>
        <SearchableDropdown
          onItemSelect={item => {
            setLocation(item);
          }}
          containerStyle={{padding: 5}}
          onRemoveItem={(item, index) => {
            // const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
            // this.setState({ selectedItems: items });
            setLocation(initialLocation);
          }}
          multi={false}
          itemStyle={{
            padding: 10,
            marginTop: 0,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{color: '#222'}}
          itemsContainerStyle={{maxHeight: 140}}
          items={locationList}
          defaultIndex={5}
          resetValue={false}
          textInputProps={{
            placeholder: 'Enter location',
            underlineColorAndroid: 'transparent',
            placeholderTextColor: 'gray',
            style: {
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              color: 'gray',
            },
            onTextChange: text => console.log(text),
          }}
          listProps={{
            nestedScrollEnabled: true,
          }}
        />
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          // followsUserLocation={true}
          initialRegion={{
            latitude: location.latitude || 37.785834,
            longitude: location.longitude || -122.406417,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: location.latitude || 40.744516,
            longitude: location.longitude || -73.98932,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {Array.isArray(locationList) &&
            locationList?.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude || 40.744516,
                  longitude: marker.longitude || -73.98932,
                }}
                tracksViewChanges={false}
                icon={isAndroid ? markerImage : null}
                // image={markerImage}
                onPress={() => setLocation(marker)}
                description={'DOME'}>
                {isAndroid ? null : (
                  <Image
                    source={markerImage}
                    style={{height: 35, width: 35, overflow: 'visible'}}
                  />
                )}
              </Marker>
            ))}
        </MapView>
      </View>

      <View style={styles.addressContainer}>
        <Text style={[material.headlineObject, styles.addressHeadingText]}>
          {location?.businessName}
        </Text>
        <View style={[material.subheading, styles.addressText]}>
          <View style={{marginTop: 5}}>
            <Text style={styles.addressInfoText}>
              {location?.businessAddress?.split(',')[0]}
            </Text>
            <Text style={styles.addressInfoText}>
              {location?.businessAddress?.substring(
                location?.businessAddress?.indexOf(',') + 1,
              )}
            </Text>
            <Text
              style={[styles.addressInfoText, {fontFamily: 'Khula-Regular'}]}>
              {location?.website}
            </Text>
            <Text style={[styles.addressInfoText, {textAlign: 'center'}]}>
              {location?.phoneNumber}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bookingContainer}>
        <Text style={styles.addressText}>CALL TO BOOK YOUR SESSION</Text>
        <TouchableOpacity
          style={{
            height: hp('6%'),
            width: wp('60%'),
            backgroundColor: '#70b1ba',
            marginTop: hp('1.8%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            Linking.openURL(location.website || 'https://somadome.com/')
          }>
          <Text
            style={{
              fontSize: 17,
              color: 'white',
              textAlign: 'center',
              fontFamily: 'PTSans-Regular',
            }}>
            BOOK A SESSION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  heading: {
    flexDirection: 'row',
    height: hp('10%'),
    alignItems: 'center',
    backgroundColor: '#70b1ba',
  },
  mapContainer: {
    marginTop: hp('0%'),
    height: hp('30%'),
  },
  addressContainer: {
    alignItems: 'center',
  },
  bookingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#f9f9f9',
    borderTopWidth: 1,
    marginTop: hp('2%'),
  },
  headingText: {
    color: 'white',
    fontFamily: 'BebasNeueBook',
  },
  addressText: {
    color: '#b8b8bb',
    fontSize: 14,
    fontFamily: 'PTSans-Regular',
    fontWeight: '700',
  },
  addressHeadingText: {
    color: 'black',
    fontSize: FONT_HEADING,
    fontFamily: 'BebasNeueBook',
    fontWeight: '600',
  },
  addressInfoText: {
    textAlign: 'center',
    color: '#b8b8bb',
    fontFamily: 'PTSans-Regular',
    marginTop: 5,
  },
  map: {
    width: '100%',
    height: '95%',
  },
  backIcon: {
    height: 30,
    width: 17,
    marginLeft: wp('8%'),
  },
});

export default FindDome;
