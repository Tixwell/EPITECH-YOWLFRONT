import React, { Component,useState} from 'react';
import { StyleSheet
, Text
,Image
, View
, TextInput
, TouchableOpacity
,TouchableHighlight
, Keyboard } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function saveData () {
        axios.get('http://127.0.0.1:8000/api/register?name='+name+'&email='+email+'&password='+password+'')
        storeData(email)
        navigation.navigate("PREFERENCE_CHOICE")
    }
    const handlechange1 = (e) =>{
        setEmail(e.target.value);
    }
    const handlechange2 = (e) =>{
        setName(e.target.value);
    }
    const handlechange3 = (e) =>{
        setPassword(e.target.value);
    }

    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('@email', value)
      } catch (e) {
        console.log(e)
      }
    }
    
        return(       
            <View style={styles.container}>
            <Image
             style={styles.tinyLogo}
        source={require('../../assets/yowl-logo.png')}/>
            <Text style={styles.email}>Email</Text>
                <TextInput style={styles.inputBox}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"
                placeholderTextColor = "white" selectionColor="#fff" keyboardType="Email" onChange={handlechange1}
                />
            <Text style={styles.title}>Username</Text>
                <TextInput style={styles.inputBox}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Username"
                placeholderTextColor = "white" selectionColor="#fff" keyboardType="Username" onChange={handlechange2}
                />
            <Text style={styles.title}>Password</Text>
                <TextInput style={styles.inputBox}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor = "white"
                onChange={handlechange3}
                />
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={saveData}>REGISTER</Text>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    });

    export default Register;