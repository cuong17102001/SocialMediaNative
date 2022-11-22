import {Text} from "react-native"
import useStore from "../../store"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../home/Home";

// import * as React from 'react'

const Tab = createBottomTabNavigator();
const Navigator = () => {

    // const setCurrentUser = useStore((state) => state.setCurrentUser)

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Home} />
                <Tab.Screen name="Chat" component={Home} />
                <Tab.Screen name="Profile" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator