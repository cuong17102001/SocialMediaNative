import React, { useState } from 'react'
import { Text, View } from 'react-native'
import useStore from '../../store'
import { AntDesign } from '@expo/vector-icons'; 

export const Menu = () => {
  const setCurrentUser = useStore((state) => state.setCurrentUser)

  const handleLogout = () => {
    setCurrentUser(null)
  }
  return (
    <View style={{
      width: "100%",
      height: "100%",
      paddingTop: 70,
      paddingLeft: 15,
      paddingRight: 15,
      justifyContent: "space-between"
    }}>
      <View style={{

      }}>
        <Text style={{
          margin: 15,
          fontSize: 15
        }}><AntDesign name="user" size={15} color="black" /> Account</Text>
        <Text style={{
          margin: 15,
          fontSize: 15
        }}><AntDesign name="setting" size={15} color="black" /> Setting</Text>
      </View>
      <Text style={{
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        color: "#ed4440",
      }}
        onPress={handleLogout}
      >Log Out</Text>
    </View>
  )
}
