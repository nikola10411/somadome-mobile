import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

import {Formik} from 'formik';
import * as yup from 'yup';

import {useDispatch} from 'react-redux';
import {
  loginFailure,
  loginSuccess,
  loginRequest,
  userLoginAPI,
} from '../../services/loginService';
// import * as userActions from '../../redux/user/userActions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const userRegisterImage = require('../../../assets/userRegister/registerPageBackground.png');
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

const Login = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [initialForm, setInitialForm] = useState({
    email: '',
    password: '',
  });

  const [formState, setFormState] = useState(initialForm);

  const loginHandler = async userData => {
    // const userData = {username: formState.email, password: formState.password};
    dispatch(loginRequest(userData));
    await userLoginAPI(userData)
      .then(response => {
        console.log('response-->', response.data);
        const token = response.data.access_token;
        console.log('Token-->', token);
        AsyncStorage.setItem('token', token);
        // await AsyncStorage.setItem('key', value)
        props.navigation.navigate('Home');
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        Alert.alert("Error while logging in")
        dispatch(loginFailure(error.response.data));
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occured!', error, [{text: 'Okay'}]);
    }
    // console.log('Props', props);
  }, [error]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                    initialValues={{email: '', password: ''}}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                      actions.resetForm();
                      loginHandler(values);
                    }}>
                    {props => (
                      <View style={styles.formControl}>
                        <Text style={styles.label}> Email</Text>
                        <TextInput
                          style={styles.input}
                          // value={formState.email}
                          // onChangeText={(text) => {
                          //   setFormState({ ...formState, email: text });
                          // }}
                          placeholder="Enter email"
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
                          secureTextEntry
                          required
                          minLength={5}
                          autoCapitalize="none"
                          errorText="Please enter a valid password"
                          style={styles.input}
                          placeholderTextColor="gray"
                          // value={formState.password}
                          // onChangeText={(text) => {
                          //   setFormState({ ...formState, password: text });
                          // }}
                          placeholder="Enter password"
                          value={props.values.password}
                          onChangeText={props.handleChange('password')}
                          onBlur={props.handleBlur('password')}
                        />

                        <View style={styles.errorContainer}>
                          <Text style={styles.errorText}>
                            {props.touched.password && props.errors.password}
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
                              title="LOGIN"
                              color={Colors.primary}
                              // onPress={loginHandler}
                              onPress={props.handleSubmit}
                              // disabled={!formState.formIsValid}
                            />
                          )}
                        </View>
                      </View>
                    )}
                  </Formik>
                  <View style={styles.buttonContainer}>
                    <Button
                      title="SWITCH TO REGISTER"
                      color={Colors.primary}
                      onPress={() => {
                        props.navigation.navigate('Registration');
                        setFormState(initialForm);
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
            </Card>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

Login.navigationOptions = {
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
    width: wp('85%'),
    // height: hp('60%'),
    // maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  formControl: {
    // width: '100%',
  },
  label: {
    fontFamily: 'Khula-Regular',
    color: 'gray',
    marginVertical: 8,
    fontSize: 14,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: 'gray',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    // fontFamily: 'open-sans',
    color: 'red',
    fontSize: 13,
  },
});

export default Login;

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

// import React, { useState, useEffect, useReducer, useCallback } from 'react';
// import {
//   ScrollView,
//   View,
//   KeyboardAvoidingView,
//   StyleSheet,
//   Button,
//   ImageBackground,
//   Text,
//   TextInput,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';

// import Card from '../../components/UI/Card';
// import Colors from '../../constants/Colors';

// import { useDispatch } from 'react-redux';
// import * as userActions from '../../redux/user/userActions';
// const userRegisterImage = require('../../../assets/userRegister/registerPageBackground.png');
// const emailRegex =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const Login = (props) => {
//   const dispatch = useDispatch();
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();

//   const [initialForm, setInitialForm] = useState({
//     email: '',
//     password: '',
//   });

//   const [formState, setFormState] = useState(initialForm);

//   const loginHandler = async () => {
//     setError(null);
//     setIsLoading(true);
//     try {
//       await dispatch(userActions.login(formState.email, formState.password));
//       props.navigation.navigate(''); // screen name to navigate on success
//     } catch (err) {
//       setError(err.message);
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     if (error) {
//       Alert.alert('An Error Occured!', error, [{ text: 'Okay' }]);
//     }
//   }, [error]);

//   return (
//     <KeyboardAvoidingView
//       behaviour='padding'
//       keyboardVerticalOffset={50}
//       style={styles.screen}
//     >
//       <ImageBackground source={userRegisterImage} style={styles.image}>
//         <View style={styles.gradient}>
//           <Card style={styles.authContainer}>
//             <ScrollView>
//               <View style={styles.formControl}>
//                 <Text style={styles.label}> Email</Text>
//                 <TextInput
//                   style={styles.input}
//                   value={formState.email}
//                   onChangeText={(text) => {
//                     setFormState({ ...formState, email: text });
//                   }}
//                 />

//                 <Text style={styles.label}> Password</Text>
//                 <TextInput
//                   id='password'
//                   label='password'
//                   keyboardType='default'
//                   secureTextEntry
//                   required
//                   minLength={5}
//                   autoCapitalize='none'
//                   errorText='Please enter a valid password'
//                   style={styles.input}
//                   value={formState.password}
//                   onChangeText={(text) => {
//                     setFormState({ ...formState, password: text });
//                   }}
//                 />

//                 <View style={styles.errorContainer}>
//                   <Text style={styles.errorText}></Text>
//                 </View>
//               </View>

//               <View style={styles.buttonContainer}>
//                 {isLoading ? (
//                   <ActivityIndicator size='small' color={Colors.primary} />
//                 ) : (
//                   <Button
//                     title='LOGIN'
//                     color={Colors.primary}
//                     onPress={loginHandler}
//                     // disabled={!formState.formIsValid}
//                   />
//                 )}
//               </View>
//               <View style={styles.buttonContainer}>
//                 <Button
//                   title='SWITCH TO REGISTER'
//                   color={Colors.primary}
//                   onPress={() => {
//                     props.navigation.navigate('Login');
//                     setFormState(initialForm);
//                   }}
//                 />
//               </View>
//             </ScrollView>
//           </Card>
//         </View>
//       </ImageBackground>
//     </KeyboardAvoidingView>
//   );
// };

// Login.navigationOptions = {
//   headerTitle: 'Please authenticate',
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   authContainer: {
//     width: '80%',
//     maxWidth: 400,
//     // height: '50%',
//     maxHeight: 400,
//     padding: 20,
//   },
//   buttonContainer: {
//     marginTop: 10,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   formControl: {
//     width: '100%',
//   },
//   label: {
//     // fontFamily: 'open-sans-bold',
//     marginVertical: 8,
//   },
//   input: {
//     paddingHorizontal: 2,
//     paddingVertical: 5,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//   },
//   errorContainer: {
//     marginVertical: 5,
//   },
//   errorText: {
//     // fontFamily: 'open-sans',
//     color: 'red',
//     fontSize: 13,
//   },
// });

// export default Login;

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

// import React, { useState } from 'react';
// import { SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';

// const Login = ({ navigation }) => {
//   const [username, setusername] = useState('');
//   const [password, setpassword] = useState('');

//   return (
//     <SafeAreaView
//       style={{
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: '30%',
//       }}
//     >
//       <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Login Screen</Text>

//       <Text
//         style={{ alignSelf: 'flex-start', marginLeft: '16%', marginTop: '6%' }}
//       >
//         Username
//       </Text>
//       <TextInput
//         style={{
//           height: 50,
//           width: 250,
//           borderColor: 'black',
//           borderWidth: 1,
//           marginTop: '3%',
//           paddingLeft: 10,
//         }}
//         placeholder='Enter Email or Username'
//         value={username}
//         onChange={(e) => setusername(e.target.value)}
//       />

//       <Text
//         style={{ alignSelf: 'flex-start', marginLeft: '16%', marginTop: '6%' }}
//       >
//         Password
//       </Text>
//       <TextInput
//         style={{
//           height: 50,
//           width: 250,
//           borderColor: 'black',
//           borderWidth: 1,
//           marginTop: '3%',
//           paddingLeft: 10,
//         }}
//         placeholder='Enter Password'
//         value={password}
//         onChange={(e) => setpassword(e.target.value)}
//       />
//       <TouchableOpacity
//         style={{
//           height: 50,
//           width: 150,
//           backgroundColor: 'black',
//           marginTop: '10%',
//         }}
//         onPress={() => navigation.navigate('Home')}
//       >
//         <Text
//           style={{
//             fontSize: 18,
//             color: 'white',
//             textAlign: 'center',
//             paddingTop: 12,
//           }}
//         >
//           Login
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default Login;
