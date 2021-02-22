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

const Preferences = ({navigation}) => {
        const [food, setFood] = useState(false);
        const [vg, setVG] = useState(false);
        const [clothes, setClothes] = useState(false);
        const [travel, setTravel] = useState(false);
        const [design, setDesign] = useState(false);

        const foodHandle = () =>{
            setFood(previousState => !previousState);
        }
        const vgHandle = () =>{
            setVG(previousState => !previousState);
        }
        const clothesHandle = () =>{
            setClothes(previousState => !previousState);
        }
        const travelHandle = () =>{
            setTravel(previousState => !previousState);
        }
        const designHandle = () =>{
            setDesign(previousState => !previousState);
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
        const email = getData()
        console.log(email)
        const submit = () =>{
            console.log(food)
            console.log(email)
            axios.get('http://127.0.0.1:8000/api/Preferences?user_id='+email+'&food='+food+'&video_games='+vg+'&travel='+travel+'&design='+design+'&clothes='+clothes+'')
            navigation.navigate("MAINPAGE")
        }

        return(
            <View style={styles.container}>
          <Text style={styles.title}>WHAT DO YOU LIKE ?</Text>
          <TouchableOpacity style={ food === false ? styles.buttonToBeSelect : styles.buttonSelected }>
          <Text style={styles.buttonText} onPress={foodHandle}>FOOD </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ vg === false ? styles.buttonToBeSelect : styles.buttonSelected }>
          <Text style={styles.buttonText} onPress={vgHandle}>VIDEO GAMES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ clothes === false ? styles.buttonToBeSelect : styles.buttonSelected }>
          <Text style={styles.buttonText} onPress={clothesHandle}>CLOTHES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ travel === false ? styles.buttonToBeSelect : styles.buttonSelected }>
          <Text style={styles.buttonText} onPress={travelHandle}>TRAVEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ design === false ? styles.buttonToBeSelect : styles.buttonSelected }>
          <Text style={styles.buttonText} onPress={designHandle}>DESIGN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={submit}>CONTINUE →</Text>
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
        marginTop:15,
        fontSize: 25,
        fontFamily:"Helvetica",
    },
    email:{
        marginLeft: -250,
        fontSize: 15,
    },
    buttonSelected: {
        width: 299,height:50,
        backgroundColor: 'red', borderRadius: 24,
        marginVertical: 9,
        paddingVertical: 15
        },
    buttonToBeSelect: {
    width: 299,height:50,
    backgroundColor: '#16161a', borderRadius: 24,
    marginVertical: 9,
    paddingVertical: 15
    },
    button: {
    width: 299,height:50,
    backgroundColor: '#16161a', borderRadius: 14,
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

    export default Preferences;