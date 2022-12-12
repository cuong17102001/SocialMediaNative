import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import profileImage from "../../img/default.png"
import env from "../../../env.json"
import axios from 'axios'

const ListUserChat = ({ data, currentUser }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUser)

        axios.get(env.API_URL+'/user/'+userId)
        .then(function (response) {
          // handle success
          setUserData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, [])
    return (
        <View style={{
            flexDirection: "row",
            width: "auto", margin: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 20,
            alignItems: "center"
        }}>
            <Image style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                alignSelf: "flex-start"
            }} source={userData?.profilePicture ? env.API_PUBLIC_FOLDER + userData.profilePicture :
                profileImage} />
            <Text style={{ marginLeft: 10 }}>{userData?.firstname} {userData?.lastname}</Text>
        </View>
    )
}

export default ListUserChat
