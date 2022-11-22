import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppStyle from './AppStyle';
import Home from './src/pages/home/Home';
import env from "./env.json"
import Auth from './src/pages/Auth/Auth';
import useStore from './src/store';
import Navigator from './src/pages/Navigator/Navigator';

export default function App() {
  const currentUser = useStore((state) => state.currentUser)

  return (
    <View style={AppStyle.app}>
      <View style={AppStyle.blur}></View>
      {currentUser !== null ? <Navigator/> : <Auth/>}
    </View>
  );
}
