import React, { Component,useState,useEffect } from 'react';
import { StyleSheet
, Text
,Image
, View
, TextInput
, TouchableOpacity
,FlatList
, Keyboard } from 'react-native';

import axios from 'axios';

const MainPage = ({navigation}) => {
    const [data, setData] = useState([]);
    const [commentaire, setCommentaire] = useState("");
     const getArticleid = async () => {
            try {
              const value = await AsyncStorage.getItem('@article_id')
              if(value !== null) {
                return value;
              }
            } catch(e) {
              // error reading value
            }
          }
    useEffect(()=>{
        console.log('MOUNT')
        axios.get('http://127.0.0.1:8000/api/readcom?article_id=2')
        .then(async function (response) {
            const data = response.data
            console.log(response.data)
            setData(response.data[0])
            setLoading(false)
            console.log(data)
            return data

        })
       
    });
    const handlechange3 = (e) =>{
        setCommentaire(e.target.value);
    }
    function com(com) {
        navigation.navigate(com)
        }
        const getEmail = async () => {
            try {
              const value = await AsyncStorage.getItem('@email')
              if(value !== null) {
                return value;
              }
            } catch(e) {
              // error reading value
            }
          }

         
        function saveData () {
            
            axios.get('http://127.0.0.1:8000/api/writecom?user_id=test&article_id=2&com='+commentaire+'')
        }

    console.log(data)
    const [loading, setLoading] = useState(true);    
    
        return(
            <View style={styles.container}>

                 <Text> {data.commentaire}</Text>
                <TextInput style={styles.inputBox}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter your comment"

                placeholderTextColor = "white"
                onChange={handlechange3}
                />
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={saveData}>POST</Text>
            </TouchableOpacity>
        
            </View>
        )
     }
const styles = StyleSheet.create({ container: {
    justifyContent: 'center', alignItems: 'center', marginBottom:150,
    },
    tinyLogo: {
        width: 1000,
        height: 1000,
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