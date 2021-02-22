import React, { Component,useState,useEffect } from 'react';
import { StyleSheet
, Text
,Image
, View
, TextInput
, TouchableOpacity
,FlatList
, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MainPage = ({navigation,route}) => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [getcommentaire, setCommentaire] = useState("");
        
     
        console.log('MOUNT')
        var result = [];
        useEffect(() => {
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
              
            const article_id = AsyncStorage.getItem('@article_id')
            console.log('Commm article = '+ article_id )
        axios.get('http://127.0.0.1:8000/api/readcom?article_id='+route.params.article_id)
        .then(async function (response) {
            const data = response.data
            console.log(response.data)
            setData(response.data)
            setLoading(false)
            console.log(data)
            setData2 (data.map(function(item) {
                return {
                  key: item.article_id,
                  label: item.user_id
                };
              }));
            console.log(data2)
            return data,data2
    });
}, []);
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
     
          console.log("data =" + data);

        function saveData () {
            
            console.log(getcommentaire)
            console.log(article_id)
            console.log('http://127.0.0.1:8000/api/writecom?user_id=unknown&article_id='+route.params.article_id+'&com='+getcommentaire+'')
            axios.get('http://127.0.0.1:8000/api/writecom?user_id=unknown&article_id='+route.params.article_id+'&com='+getcommentaire+'')
        }

    console.log(data)
    const [loading, setLoading] = useState(true);    
        return(
            <View style={styles.container}>
               {data2.map((number) =>  <li>{number.user_id}</li>)}
                 <Text> {data.user_id} : {data.commentaire}</Text>
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