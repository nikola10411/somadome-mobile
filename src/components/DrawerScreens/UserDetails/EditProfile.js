import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Avatar } from 'react-native-paper';

const editUserProfileSchema = yup.object({
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(3),
  headline: yup.string().required().min(3),
  email: yup.string().required().email(),
  location: yup.string().required().min(2),
});

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    email: '',
    location: '',
  });

  return (
    <>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: '6%',
        }}
      >
        <Text>PROFILE PICTURE</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          // alignItems: 'center',
          marginTop: 7,
          marginBottom: 12,
          flexDirection: 'row',
        }}
      >
        <Avatar.Image
          source={require('../../../../assets/images/userProfileEdit/AVATARICON.png')}
          size={80}
          // placeholderStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: 'white' }}
        />

        <Image
          source={require('../../../../assets/images/userProfileEdit/editIcon.png')}
          size={30}
          // placeholderStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: 'white' }}
        />
      </View>

      <SafeAreaView
        style={{
          justifyContent: 'space-around',
          alignItems: 'stretch',
          flexDirection: 'column',
          marginLeft: '10%',
          marginRight: '10%',
          // backgroundColor: 'white',
        }}
      >
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            headline: '',
            email: '',
            location: '',
          }}
          validationSchema={editUserProfileSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            console.log(values);
            // signupHandler();
          }}
        >
          {(props) => (
            <View style={styles.formControl}>
              <Text style={styles.label}> First Name</Text>
              <TextInput
                style={styles.input}
                // value={formState.firstName}
                value={props.values.firstName}
                // onChangeText={(text) => {
                //   setFormState({ ...formState, firstName: text });
                // }}
                onChangeText={props.handleChange('firstName')}
                placeholder='Enter firstName'
                onBlur={props.handleBlur('firstName')}
              />
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {props.touched.firstName && props.errors.firstName}
                </Text>
              </View>

              <Text style={styles.label}> Last Name</Text>
              <TextInput
                style={styles.input}
                // value={formState.firstName}
                value={props.values.lastName}
                // onChangeText={(text) => {
                //   setFormState({ ...formState, firstName: text });
                // }}
                onChangeText={props.handleChange('lastName')}
                placeholder='Enter lastName'
                onBlur={props.handleBlur('lastName')}
              />
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {props.touched.firstName && props.errors.firstName}
                </Text>
              </View>

              <Text style={styles.label}> Headline</Text>
              <TextInput
                style={styles.input}
                // value={formState.firstName}
                value={props.values.headline}
                // onChangeText={(text) => {
                //   setFormState({ ...formState, firstName: text });
                // }}
                onChangeText={props.handleChange('headline')}
                placeholder='Enter headline'
                onBlur={props.handleBlur('headline')}
              />
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {props.touched.firstName && props.errors.firstName}
                </Text>
              </View>

              <Text style={styles.label}> Email</Text>
              <TextInput
                style={styles.input}
                // value={formState.email}
                // onChangeText={(text) => {
                //   setFormState({ ...formState, email: text });
                // }}
                placeholder='Enter email'
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
              />
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>
              </View>

              <Text style={styles.label}> Location</Text>
              <TextInput
                style={styles.input}
                // value={formState.firstName}
                value={props.values.location}
                // onChangeText={(text) => {
                //   setFormState({ ...formState, firstName: text });
                // }}
                onChangeText={props.handleChange('location')}
                placeholder='Enter location'
                onBlur={props.handleBlur('location')}
              />
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {props.touched.firstName && props.errors.firstName}
                </Text>
              </View>

              <Text style={styles.hyperlink}> Privacy Settings</Text>
              <Text style={styles.hyperlink}> Reset Password</Text>
            </View>
          )}
        </Formik>
      </SafeAreaView>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          marginLeft: '27%',
          marginRight: '27%',
          marginTop: '8%',
        }}
      >
        <Button title='SAVE CHANGES' color='#86D1DB' />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    // height: '50%',
    maxHeight: 400,
    padding: 20,
    // paddingRight: 20,
    // paddingTop: 20,
    // paddingBottom: 0,
  },
  buttonContainer: {
    marginTop: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  formControl: {
    width: '100%',
  },
  label: {
    // fontFamily: 'open-sans-bold',
    marginVertical: 0,
  },
  hyperlink: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 12,
  },
  input: {
    paddingHorizontal: 3,
    paddingVertical: 0,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: -2,
  },
  errorText: {
    // fontFamily: 'open-sans',
    color: 'red',
    fontSize: 13,
  },
});

export default EditProfile;
