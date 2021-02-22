import React, { Component,useState,useEffect } from 'react';
import { StyleSheet
, Text
,Image
, View
, TextInput
, TouchableOpacity
,FlatList
, Keyboard } from 'react-native';
import { SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MainPage = ({navigation}) => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    var result = [];
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

        



    })
}, []);
const storeArticle = async (value) => {
    try {
      await AsyncStorage.setItem('@article_id', value)
      console.log('Article Save'+value)
    } catch (e) {
      console.log(e)
    }
  }

    function com() {
        storeArticle("1")
        navigation.navigate("Commentaires",{ article_id: "1" })
        }
    
    function com2() {
        storeArticle("2")
        navigation.navigate("Commentaires",{ article_id: "2" })
        }

    function com3() {
        storeArticle("3")
        navigation.navigate("Commentaires",{ article_id: "3" })
        }
    
    console.log(data)
    const [loading, setLoading] = useState(true);    
    
        return(
            <View style={styles.container}>
 <TouchableOpacity  style={styles.header} >

                                 <Image
        style={styles.yowl}
        source={{
            uri: "https://media.discordapp.net/attachments/809868554815537163/813498631634157629/yowl-logo.png",
            
        }}
      />
      <TextInput style={styles.inputBox}  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Search Yowl"

placeholderTextColor = "white"
/>
</TouchableOpacity>     
                 <TouchableOpacity  style={styles.article} onPress={com}>
                 <Image
        style={styles.tinyLogo}
        source={{
            uri: data.img,
            
        }}
      />
                 <Text > {data.title}</Text>
                 <Text  style={styles.infos}> {data.published}</Text>
                 <Text style={styles.infos}> {data.views}</Text>

                 
                
            </TouchableOpacity>

            <TouchableOpacity  style={styles.article} onPress={com2}>
                 <Image
        style={styles.tinyLogo}
        source={{
          uri: data1.img,
        }}
      />
                 <Text> {data1.title}</Text>
                 <Text style={styles.infos}> {data1.published}</Text>
                 <Text style={styles.infos}> {data1.views}</Text>

                 </TouchableOpacity>
                 <TouchableOpacity  style={styles.article} onPress={com3}>
                 <Image
        style={styles.tinyLogo}
        source={{
          uri: data2.img,
        }}
        onClick={com}
      />
                 <Text> {data2.title}</Text>
                 <Text style={styles.infos}> {data2.published}</Text>
                 <Text style={styles.infos}> {data2.views}</Text>

                
                 </TouchableOpacity>
            </View>
        )
     }
const styles = StyleSheet.create({ container: {
    justifyContent: 'center', alignItems: 'center', marginBottom:150,
    },
    article:{
        shadowRadius:10,
        borderRadius:15,
        marginBottom:15,
        height: 175,
    },
    header:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    infos:{
        textAlign: "Left",
        fontSize: 8,
    },
    save:{
        width: 25,
        height: 25,
        color: 'black',
        backgroundColor:"black",
        marginLeft: 220,
    },
    yowl: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "left",
        width: 100,
        height: 125,
        borderRadius:50,
        marginTop:20,
        position:"flex",
    },
    tinyLogo: {
        width: 250,
        height: 125,
        borderRadius:50,
      },
    inputBox: {
    width: 150, backgroundColor: '#16171b', borderRadius: 14,
    height:25,
    paddingHorizontal: 15,
    fontSize: 15,
    color: 'white',
    marginVertical: 9,
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