import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import env from "../../../env.json"
import image from "../../img/profileImg.jpg"
import like from "../../img/like.png"
import unlike from "../../img/notlike.png"
import { FontAwesome5 } from '@expo/vector-icons';
import useStore from '../../store'
import axios from 'axios'
import { Feather } from '@expo/vector-icons';

export const Post = ({ data }) => {
  const currentUser = useStore((state) => state.currentUser)
  const [liked, setLiked] = React.useState(data.likes.includes(currentUser._id))
  const [likes, setLikes] = React.useState(data.likes.length)
  const [listCmt, setListCmt] = useState(data.comment ? data.comment : [])
  const [contentCmt, setContentCmt] = React.useState("")

  const handleLike = (e) => {
    console.log(env.API_URL + '/post/' + data._id + "/like");
    console.log(currentUser._id);
    axios.put(env.API_URL + '/post/' + data._id + "/like", { userId: currentUser._id })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    setLiked((prev) => !prev)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }

  const handleOnchangeCmt = (e) => {
    setContentCmt(e)
  }

  const handleSubmitCmt = () => {
    const newComment = {
      idUserComment: currentUser._id,
      nameUser: currentUser.username,
      content: contentCmt
    }
    axios.post(env.API_URL + '/post/' + data._id + "/comment", newComment)
      .then(function (response) {
        setContentCmt("")
        setListCmt([...listCmt, newComment])
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  return (
    <View style={{
      width: "auto",
      padding: 10,
      backgroundColor: "#fafafa",
      margin: 10,
      borderRadius: 10
    }}>
      <Image style={{ width: "auto", height: 250, resizeMode: 'contain' }} source={{ uri: env.API_PUBLIC_FOLDER + data.image }} />

      <Text style={{ margin: 10 }}>{data.desc}</Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',

      }}>

        <TouchableOpacity activeOpacity={.5} onPress={handleLike}>
          <Image style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginLeft: 10,
            marginRight: 10
          }} source={liked ? like : unlike}
          />
        </TouchableOpacity>

        <FontAwesome5 style={{
          marginLeft: 10,
          marginRight: 20
        }} name="comment" size={20} color="gray" />
        <FontAwesome5 name="share-square" size={20} color="gray" />
      </View>
      <Text style={{ color: "gray", marginLeft: 5 }}>{likes} like</Text>

      <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={{
          borderColor: "gray",
          borderWidth: 1,
          width: "90%",
          height: 30,
          borderRadius: 10,
          padding: 5,
        }}
          placeholder="Comment"
          value={contentCmt}
          onChangeText={handleOnchangeCmt}
        ></TextInput>
        <Feather name="send" size={24} color="black" onPress={handleSubmitCmt} />
      </View>

      <View style={{
        marginTop: 10
      }}>
        {listCmt.map((cmt, id) => (
          <View style={{
            flexDirection: "row",
            marginBottom: 3,
          }}
            key={id}
          >
            <Text style={{ fontWeight: "bold" }}>@{cmt.nameUser}</Text>
            <Text>{cmt.content}</Text>
          </View>
        ))}

      </View>
    </View>
  )
}
