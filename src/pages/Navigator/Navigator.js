import { Text, Image, StyleSheet } from "react-native"
import useStore from "../../store"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../home/Home";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { Chating } from "../Chating/Chating";

// import * as React from 'react'

const BottomTab = createBottomTabNavigator();
const Navigator = () => {

    // const setCurrentUser = useStore((state) => state.setCurrentUser)
    const windowWidth = Dimensions.get('window').width;
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#f3f3f3', width: windowWidth },
                headerShown: false,
                tabBarActiveTintColor: 'orange',
            }}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign style={[styles.bottomTabIcon, focused && styles.bottomTabIconFocused]} name="home" size={24} color="black" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Chating"
                component={Chating}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather style={[styles.bottomTabIcon, focused && styles.bottomTabIconFocused]} name="message-square" size={24} color="black" />
                    ),
                }}
            />

            <BottomTab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather style={[styles.bottomTabIcon, focused && styles.bottomTabIconFocused]} name="user" size={24} color="black" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Menu"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather style={[styles.bottomTabIcon, focused && styles.bottomTabIconFocused]} name="menu" size={24} color="black" />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Navigator

const styles = StyleSheet.create({
    bottomTabIcon: {
        color: 'grey',
    },
    bottomTabIconFocused: {
        color: 'orange',
    },
    newVideoButton: {
        width: 48,
        height: 24,
    },
});