import React, { Component,useState } from 'react';
import { StyleSheet
, Text
,Image
, View
, TextInput
, TouchableOpacity
, Keyboard } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginDB() {
        axios.get('http://127.0.0.1:8000/api/login?&email='+email+'&password='+password+'')
        .then(function (response) {
            if (response.data == "LOGGED IN"){
                storeData(email)
                navigation.navigate("MAINPAGE")
                
            }
        })
    }
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@email')
          if(value !== null) {
            return value;
          }
        } catch(e) {
          // error reading value
        }
      }

      if (getData() != ""){
        navigation.navigate("MAINPAGE")
      }

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@email', value)
        } catch (e) {
          console.log(e)
        }
      }

    function Register () {
        navigation.navigate("REGISTER")
    }
    const handlechange1 = (e) =>{
        setEmail(e.target.value);
    }
    const handlechange2 = (e) =>{
        setPassword(e.target.value);
    }


        return(
            <View style={styles.container}>
            <Image
             style={styles.tinyLogo}
        source={require('../../assets/yowl-logo.png')}
      />
            <Text style={styles.email}>Email</Text>
                <TextInput style={styles.inputBox}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"
                placeholderTextColor = "white" selectionColor="#fff" keyboardType="Email" onChange={handlechange1}
                />
            <Text style={styles.title}>Password</Text>
                <TextInput style={styles.inputBox}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor = "white" onChange={handlechange2}
                />
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={loginDB}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.register} onPress={Register} >REGISTER →</Text>
            </TouchableOpacity>
            </View>
            )
     }
const styles = StyleSheet.create({ container: {
    justifyContent: 'center', alignItems: 'center', marginBottom:150,
    },
    tinyLogo: {
        width: 250,
        height: 250,
        marginBottom:-50,
      },
    inputBox: {
    width: 299, backgroundColor: '#16171b', borderRadius: 14,
    height:50,
    paddingHorizontal: 15,
    fontSize: 15,
    color: 'white',
    marginVertical: 9
    },
    title:{
        marginLeft: -220,
        fontSize: 15,
    },
    email:{
        marginLeft: -250,
        fontSize: 15,
    },
    button: {
    width: 299,height:50,
    backgroundColor: '#037bfc', borderRadius: 14,
    marginVertical: 9,
    paddingVertical: 15
    },
    buttonText: {
    fontSize: 15,
    fontWeight: '500', color: '#ffffff', textAlign: 'center'
    },
    register: {
        fontSize: 15,
      
        fontWeight: '500', color: '#037bfc', textAlign: 'center'
        }
    });

    export default Login;