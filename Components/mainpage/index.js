import React, { Component,useState,useEffect } from 'react';
import { StyleSheet
, Text
,Image
, View
, TextInput
, TouchableOpacity
, Keyboard } from 'react-native';

import axios from 'axios';

const MainPage = ({navigation}) => {
    useEffect(()=>{
        console.log('MOUNT')
       
    });
    axios.get('http://127.0.0.1:8000/api/articles')
    .then(function (response) {
        console.log(response)
    })
        return(
            <View style={styles.container}>
                <Text>MAIN PAGE</Text>
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

    export default MainPage;