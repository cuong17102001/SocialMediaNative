import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import axios from "axios";
import env from "../../../env.json"
// import {format} from "timeago.js"
import moment from "moment"
const BoxChat = ({ chat, setSendMessage, currentUser, receivedMessage }) => {
    const windowHeight = Dimensions.get('window').height;
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        if (chat !== null) {
            axios.get(env.API_URL + '/user/' + userId)
                .then(function (response) {
                    // handle success
                    setUserData(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }, [chat, currentUser])

    //fetch message
    useEffect(() => {
        axios.get(env.API_URL + '/message/' + chat._id)
            .then(function (response) {
                // handle success
                setMessages(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <View style={{
            borderRadius: 10,
            height: windowHeight - 130
        }}>
            <View style={{
                backgroundColor: "white",
                width: "auto",
                flex: 13,

            }}>
                <ScrollView style={{
                    width: "auto",
                    height: "100%",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingBottom: 25,
                    paddingLeft: 10,
                    paddingRight: 10,
                }}>
                    {messages.map((message) => (
                        <View style={message.senderId === currentUser ? styles.messageSend : styles.messageGive}>
                            <Text style={{ color: "white" }}>{message.text}</Text>
                            <Text style={{ color: "white", marginTop: 5, fontSize: 10 }}>
                                {moment.utc(message.createdAt).local().startOf('seconds').fromNow()}
                            </Text>
                        </View>
                    ))}

                </ScrollView>
            </View>
            <View
                style={{
                    flex: 1,
                    width: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                <TextInput
                    style={{
                        backgroundColor: "#edd0b5",
                        color: '#f3f3f3',
                        flex: 9,
                        borderRadius: 20,
                        height: 30,
                        padding: 20,
                        marginRight: 10
                    }}
                    // onChangeText={onChangeUsername}
                    placeholder="Username"
                    value="124125123"
                />
                <Ionicons style={{
                    flex: 1,
                    color: "orange"
                }} name="send" size={24} color="black" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    messageSend: {
        padding: 10,
        backgroundColor: "#27d6f1",
        alignSelf: 'flex-end',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        maxWidth: 180
    },
    messageGive: {
        padding: 10,
        backgroundColor: "#f99b27",
        alignSelf: 'flex-start',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        maxWidth: 180
    }
});

export default BoxChat
