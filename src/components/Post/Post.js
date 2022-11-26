import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import env from "../../../env.json"
import image from "../../img/profileImg.jpg"
import like from "../../img/like.png"
import unlike from "../../img/notlike.png"
import { FontAwesome5 } from '@expo/vector-icons';
import useStore from '../../store'
import axios from 'axios'

export const Post = ({ data }) => {
  const currentUser = useStore((state) => state.currentUser)
  const [liked, setLiked] = React.useState(data.likes.includes(currentUser._id))
  const [likes, setLikes] = React.useState(data.likes.length)

  const handleLike = (e) => {
    console.log(env.API_URL + '/post/' + data._id + "/like");
    console.log(currentUser._id);
    axios.put(env.API_URL + '/post/' + data._id + "/like" ,{ userId : currentUser._id })
      .then(function (response) {
          console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      setLiked((prev) => !prev)
      liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }
  return (
    <View style={{
      width: "auto",
      padding: 10,
      backgroundColor: "#fafafa",
      margin: 10,
      borderRadius: 10
    }}>
      <Image style={{ width: "auto", height: 250, resizeMode: 'contain' }} source={{uri : env.API_PUBLIC_FOLDER + data.image}} />

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

    </View>
  )
}
