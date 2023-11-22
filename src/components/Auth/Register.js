import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

import {Formik} from 'formik';
import * as yup from 'yup';

import {useDispatch} from 'react-redux';
import {
  userRegisterAPI,
  registerequest,
  registerSuccess,
  registerFailure,
} from '../../services/registerServices';
const userRegisterImage = require('../../../assets/userRegister/registerPageBackground.png');
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const registerSchema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  reEnterPassword: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

const Registration = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const [initialForm, setInitialForm] = useState({
    email: '',
    password: '',
    username: '',
    reEnterPassword: '',
  });

  const [formState, setFormState] = useState(initialForm);

  const signupHandler = async (userData, actions) => {
    setError(null);
    console.log('In signup handle', userData);
    if (userData.password === userData.reEnterPassword) {
      setIsLoading(true);
      delete userData['reEnterPassword'];
      await userRegisterAPI(userData)
        .then(res => {
          console.log('In Registration screen', res.data);
          // dispatch(loginSuccess(response.data));
          setIsLoading(false);
          actions.resetForm();
          Alert.alert('You have Successfully registered, Please sign-in.');
          navigation.navigate('Login');
        })
        .catch(error => {
          setIsLoading(false);
          actions.resetForm();
          dispatch(registerFailure(error.response.data));
          Alert.alert('Error while registering the user');
        });
    } else {
      Alert.alert('Passwords Donot Match');
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occured!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  useEffect(() => {
    setFormState(initialForm);
    setError();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behaviour="padding"
        keyboardVerticalOffset={50}
        style={styles.screen}>
        <ImageBackground source={userRegisterImage} style={styles.image}>
          <View style={styles.gradient}>
            <Card style={styles.authContainer}>
              <ScrollView>
                <View>
                  {/* <Input
                id='email'
                label='E-Mail'
                keyboardType='email-address'
                required
                email
                autoCapitalize='none'
                errorText='Please enter a valid email address'
                onInputChange={inputChangeHandler}
                initialValue=''
                initiallyValid={false}
              /> */}

                  <Formik
                    initialValues={{
                      username: '',
                      email: '',
                      password: '',
                      reEnterPassword: '',
                    }}
                    validationSchema={registerSchema}
                    onSubmit={(values, actions) => {
                      // actions.resetForm();
                      signupHandler(values, actions);
                    }}>
                    {props => (
                      <View style={styles.formControl}>
                        <Text style={styles.label}> Username</Text>
                        <TextInput
                          style={styles.input}
                          // value={formState.username}
                          value={props.values.username}
                          // onChangeText={(text) => {
                          //   setFormState({ ...formState, username: text });
                          // }}
                          onChangeText={props.handleChange('username')}
                          placeholder="Enter Username"
                          placeholderTextColor="gray"
                          onBlur={props.handleBlur('username')}
                        />
                        <View style={styles.errorContainer}>
                          <Text style={styles.errorText}>
                            {props.touched.username && props.errors.username}
                          </Text>
                        </View>

                        <Text style={styles.label}> Email</Text>
                        <TextInput
                          style={styles.input}
                          // value={formState.email}
                          // onChangeText={(text) => {
                          //   setFormState({ ...formState, email: text });
                          // }}
                          placeholder="Enter Email"
                          placeholderTextColor="gray"
                          value={props.values.email}
                          onChangeText={props.handleChange('email')}
                          onBlur={props.handleBlur('email')}
                        />
                        <View style={styles.errorContainer}>
                          <Text style={styles.errorText}>
                            {props.touched.email && props.errors.email}
                          </Text>
                        </View>

                        <Text style={styles.label}> Password</Text>
                        <TextInput
                          id="password"
                          label="password"
                          keyboardType="default"
                          placeholderTextColor="gray"
                          secureTextEntry
                          required
                          minLength={5}
                          autoCapitalize="none"
                          errorText="Please enter a valid password"
                          style={styles.input}
                          // value={formState.password}
                          // onChangeText={(text) => {
                          //   setFormState({ ...formState, password: text });
                          // }}
                          placeholder="Enter Password"
                          value={props.values.password}
                          onChangeText={props.handleChange('password')}
                          onBlur={props.handleBlur('password')}
                          blurOnSubmit={false}
                          onSubmitEditing={() => Keyboard.dismiss()}
                        />
                        <Text style={[styles.label, {marginTop: 20}]}>
                          Re-Enter Password
                        </Text>
                        <TextInput
                          id="reEnterPassword"
                          label="Re Enter Password"
                          keyboardType="default"
                          placeholderTextColor="gray"
                          secureTextEntry
                          required
                          minLength={5}
                          autoCapitalize="none"
                          errorText="Please enter a valid password"
                          style={styles.input}
                          // value={formState.password}
                          // onChangeText={(text) => {
                          //   setFormState({ ...formState, password: text });
                          // }}
                          placeholder="Re Enter Password"
                          value={props.values.reEnterPassword}
                          onChangeText={props.handleChange('reEnterPassword')}
                          onBlur={props.handleBlur('reEnterPassword')}
                          returnKeyType="done"
                          blurOnSubmit={false}
                          onSubmitEditing={() => Keyboard.dismiss()}
                        />
                        <View style={styles.errorContainer}>
                          <Text style={styles.errorText}>
                            {(props.touched.password &&
                              props.errors.password) ||
                              (props.touched.reEnterPassword &&
                                props.errors.reEnterPassword)}
                          </Text>
                        </View>

                        <View style={styles.buttonContainer}>
                          {isLoading ? (
                            <ActivityIndicator
                              size="small"
                              color={Colors.primary}
                            />
                          ) : (
                            <Button
                              title="REGISTER"
                              color={Colors.primary}
                              // onPress={signupHandler}
                              onPress={props.handleSubmit}
                              // disabled={!formState.formIsValid}
                            />
                          )}
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            title="SWITCH TO LOGIN"
                            color={Colors.primary}
                            onPress={() => {
                              props.handleReset();
                              navigation.navigate('Login');
                            }}
                          />
                        </View>
                      </View>
                    )}
                  </Formik>
                </View>
              </ScrollView>
            </Card>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

Registration.navigationOptions = {
  headerTitle: 'Please authenticate',
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
    maxHeight: 500,
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
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: 'gray',
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

export default Registration;

// import React,{useState} from 'react'
// import { View, Text,TouchableOpacity,TextInput } from 'react-native'

// const Registeration = ({ navigation }) => {
//     const [ username, setusername ] = useState('')
//     const [ password, setpassword ] = useState('')
//     const [ email, setemail ] = useState('')

//     return(
//         <View style={{ justifyContent:'center',alignItems:'center',marginTop:'30%' }}>
//           <Text style={{ fontSize:30,fontWeight:'bold' }}>Registeration Screen</Text>
//           <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Username</Text>
//               <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
//                          placeholder="Enter your name"
//                          value={username}
//                          onChange={(e)=>setusername(e.target.value)} />
//               <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Email</Text>
//               <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
//                          placeholder="Enter Email"
//                          value={email}
//                          onChange={(e)=>setemail(e.target.value)} />

//           <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Create Password</Text>
//           <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
//                      placeholder="Enter Password"
//                      value={password}
//                      onChange={(e)=>setpassword(e.target.value)} />
//           <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
//                             onPress={()=>navigation.navigate("Login")}>
//                <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Register</Text>
//           </TouchableOpacity>
//         </View>
//     )
// }

// export default Registeration;
