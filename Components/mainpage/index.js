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
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/articles')
    .then(async function (response) {
        const data = response.data
        console.log(response.data[1].img)
        setData(response.data[0])
        setData1(response.data[1])
        setData2(response.data[2])
        setLoading(false)
        console.log(data)
        return data

    })
}, []);
const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@article_id', value)
    } catch (e) {
      console.log(e)
    }
  }

    function com() {
       
        navigation.navigate("Commentaires")
        }
    
    console.log(data)
    const [loading, setLoading] = useState(true);    
    
        return(
            <View style={styles.container}>
                 <Image
        style={styles.tinyLogo}
        source={{
            uri: data1.img,
            
        }}
      />
                 <Text> {data.title}</Text>
                 <Text> {data.published}</Text>
                 <Text> {data.views}</Text>
                 <TouchableOpacity >
                <Text style={styles.register} onPress={com} >Commentaires</Text>
            </TouchableOpacity>
                 <Image
        style={styles.tinyLogo}
        source={{
          uri: data1.img,
        }}
        onClick={com}
      />
                 <Text> {data1.title}</Text>
                 <Text> {data1.published}</Text>
                 <Text> {data1.views}</Text>
                 <Text style={styles.register} onPress={com} >Commentaires</Text>
                 <Image
        style={styles.tinyLogo}
        source={{
          uri: data2.img,
        }}
        onClick={com}
      />
                 <Text> {data2.title}</Text>
                 <Text> {data2.published}</Text>
                 <Text> {data2.views}</Text>
                 <Text style={styles.register} onPress={com} >Commentaires</Text>
            
                
        
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