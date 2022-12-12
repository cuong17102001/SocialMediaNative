import { useEffect, useRef, useState } from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native"
import { Dimensions } from 'react-native'
import BoxChat from "../../components/BoxChat/BoxChat";
import { AntDesign } from '@expo/vector-icons';
import env from "../../../env.json"
import useStore from "../../store";
import axios from "axios";
import ListUserChat from "../../components/ListUserChat/ListUserChat";
import { Ionicons } from '@expo/vector-icons';
import { io } from "socket.io-client"
export const Chating = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const [status, setStatus] = useState(false)
  const [currentChat, setCurrentChat] = useState(null)
  const currentUser = useStore((state) => state.currentUser)
  const [chats, setChats] = useState([])
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([])

  const socket = useRef()

  useEffect(() => {
    socket.current = io('https://socketio-chating.onrender.com')
    socket.current.emit("new-user-add", currentUser._id)
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users)
    })
  }, [])

  useEffect(() => {
    axios.get(env.API_URL + '/chat/' + currentUser._id)
      .then(function (response) {
        setChats(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage)
    }
  }, [sendMessage])

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      setReceivedMessage(data);
    }
    );
  }, []);

  if (!status) {
    return (
      <View style={{ width: windowWidth, justifyContent: "center", alignItems: "center", paddingTop: 25 }}>
        <Text style={{
          fontSize: 30,
          fontWeight: "bold"
        }}>Chating</Text>

        <View style={{ width: "100%" }}>
          {chats.map((chat, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setStatus(!status)
                setCurrentChat(chat)
              }}>
              <ListUserChat
                data={chat}
                currentUser={currentUser._id}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  } else {
    return (
      <View style={{
        width: windowWidth,
        marginTop: 40,
        padding: 10
      }}>
        <TouchableOpacity onPress={() => setStatus(!status)}>
          <Ionicons style={{ color: "orange" }} name="ios-arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>

        <BoxChat
          chat={currentChat}
          currentUser={currentUser._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </View>
    )
  }
}
