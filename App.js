import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppStyle from './AppStyle';
import Home from './src/pages/home/Home';
import axios from 'axios';
import { useEffect } from 'react';

import env from "./env.json"

export default function App() {
  useEffect(() =>{
    axios.get(`${env.API_URL}/post/6342611596366a2f3c2f6ec3/timeline`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
} , [])
  return (
    <View style={AppStyle.app}>
      <View style={AppStyle.blur}></View>
      
      <Home/>

    </View>
  );
}
