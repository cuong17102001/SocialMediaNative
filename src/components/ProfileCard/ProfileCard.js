import React from 'react'
import { Image, Text, View } from 'react-native'
import bgImage from '../../img/default.jpg'
import profileImage from '../../img/default.png'
import profile from "../../img/postpic1.jpg"

export const ProfileCard = () => {
    return (
        <View style={{
            backgroundColor: "white",
            width: "auto",
            height: 200,
            margin: 10,
            borderRadius: 10,
            position: "relative"
        }}>
            <Image
                style={{
                    width: "100%",
                    resizeMode: 'contain',
                    position: "absolute",
                    borderRadius: 10,
                    top: -200,
                }}
                source={bgImage} />
            <View style={{
                width : "100%",
                alignItems : 'center',
                position : "absolute",
                top : 75
            }}>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius : "50%",
                    }}
                    source={profileImage} />
            </View>

            <View style={{
                width: "100%",
                top: 130,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: "bold" }}>nguyễn quốc cường</Text>
                <Text>@cuong1</Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}
