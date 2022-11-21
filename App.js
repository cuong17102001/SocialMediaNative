import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppStyle from './AppStyle';
import Home from './src/pages/home/Home';
import axios from 'axios';
import { useEffect } from 'react';
import env from "./env.json"
import Auth from './src/pages/Auth/Auth';

export default function App() {
  return (
    <View style={AppStyle.app}>
      <View style={AppStyle.blur}></View>
      {/* <Home/> */}
      <Auth/>
    </View>
  );
}
