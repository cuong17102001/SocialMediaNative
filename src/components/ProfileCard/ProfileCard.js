import axios from 'axios'
import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import bgImage from '../../img/default.jpg'
import profileImage from '../../img/default.png'
import profile from "../../img/postpic1.jpg"
import useStore from '../../store'
import { Posts } from '../Posts/Posts'
import env from "../../../env.json"

export const ProfileCard = () => {
    const currentUser = useStore((state) => state.currentUser)
    const setListPostsProfile = useStore((state) => state.setListPostsProfile)
    const listPostsProfile = useStore((state) => state.listPostsProfile)
    useEffect(() => {
        axios.get(env.API_URL + '/post/' + currentUser._id + "/timeline")
            .then(function (response) {
                if (response.data) {
                    response.data.pop()
                    setListPostsProfile(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <ScrollView style={{
            width: "100%",
            height: "100%",
        }}>
            <View style={{
                backgroundColor: "white",
                width: "auto",
                height: 300,
                margin: 10,
                borderRadius: 10,
                position: "relative"
            }}>
                <Image
                    style={{
                        width: "100%",
                        maxHeight: 100,
                        resizeMode: 'contain',
                        position: "absolute",
                        borderRadius: 10,
                    }}
                    source={bgImage} />
                <View style={{
                    width: "100%",
                    alignItems: 'center',
                    position: "absolute",
                    top: 75
                }}>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                        }}
                        source={profileImage} />
                </View>

                <View style={{
                    width: "100%",
                    top: 130,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: "bold" }}>{currentUser.firstname} {currentUser.lastname}</Text>
                    <Text>@{currentUser.username}</Text>
                </View>
                <View
                    style={{
                        marginTop: 150,
                        borderBottomColor: 'gray',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={{
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "row",
                    height: 100
                }}>
                    <View style={{
                        alignItems:'center',
                    }}>
                        <Text style={{fontSize: 20}}>{currentUser.following.length}</Text>
                        <Text>Following</Text>
                    </View>
                    <View style={{
                        width:1,
                        height:90,
                        borderRightWidth:1,
                        borderRightColor:"gray"
                    }}/>
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Text style={{fontSize: 20}}>{currentUser.followers.length}</Text>
                        <Text>Followers</Text>
                    </View>
                </View>
            </View>
            <Posts listPosts={listPostsProfile} />
        </ScrollView>
    )
}
