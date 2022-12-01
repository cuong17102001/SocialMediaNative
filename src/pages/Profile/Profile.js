import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../components/Header/Header'
import { ProfileCard } from '../../components/ProfileCard/ProfileCard'

export const Profile = () => {
  return (
    <View >
        <Header/>
        <ProfileCard/>
    </View>
  )
}
