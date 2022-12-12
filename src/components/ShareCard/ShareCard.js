import React, { useState } from 'react'
import { Button, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import profileImage from '../../img/default.png'
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AppStyle from '../../../AppStyle';
import env from "../../../env.json"
import axios from 'axios';
import useStore from '../../store';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export const ShareCard = () => {
  const [image, setImage] = useState(null);
  const [desc , setDesc] = React.useState("")
  const currentUser = useStore((state) => state.currentUser)
  
  const handleChooseFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result);
    }
  }

 
  const reset = () => {
    setImage(null)
    setDesc("")
  }

  const handleSubmit = async() => {
    const newPost = {
      userId: currentUser._id,
      desc: "123"
    } 

    if (image) {
      const data = new FormData()
      const filename = Date.now() + image.uri

      data.append('name', filename)
      data.append('file', {
        uri : image.uri,
        type : image.type,
      })
      
      newPost.image = filename
      axios.post(`https://pearl-social-media.onrender.com/upload`, data , {
        headers : {
          Accept : 'application/json',
          "Content-Type" : 'multipart/form-data',
        }
      })
        .then(res => {
          console.log("uploadSuccess");
        })
        .catch(error => console.log(error));
    }

    axios.post(`https://pearl-social-media.onrender.com/post`, newPost)
      .then(res => {
        // addPosts(res.data)
        console.log("oke");
      })
      .catch(error => console.log(error));

    reset()
  }

  const pickUploadVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    setHaveResult(true);
    console.log(result);
    // setUploadVideoScreen(result.uri);
    // setUploadVideoServer(result);
    console.log(uploadVideoServer);

    if (!result.cancelled) {
      setHaveResult(false);
    }

    // client.assets
    //   .upload(
    //     "file",
    //     FileSystem.getContentUriAsync(FileSystem.cacheDirectory),
    //     {
    //       contentType: "video",
    //       filename: result.uri,
    //     }
    //   )
    //   .then((newVideo) => {
    //     console.log("Upload Done!", newVideo);
    //   });
    const vid = await fetch(result.uri);
    const bytes = await vid.blob();

    await client.assets
      .upload("file", bytes, {
        filename: "video",
      })
      .then((newVideo) => {
        console.log("Upload Done!", newVideo);
        setNewVideo_id(newVideo?._id);

        // client.create(doc).then((res) => {
        //   console.log(res);
        //   return client
        //     .patch(res._id)
        //     .set({
        //       video: {
        //         _type: "file",
        //         asset: { _type: "reference", _ref: newVideo?._id },
        //       },
        //     })
        //     .commit();
        // });
      });
  };

  return (
    <View style={{
      width: "auto",
      margin: 5,
      borderRadius: 10,
      backgroundColor: "#fafafa"
    }}>
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row'
      }}>
        <Image style={{
          width: 30,
          height: 30
        }}
          source={profileImage}
        />
        <TextInput
          style={{
            height: 40,
            margin: 12,
            flex: 4,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#e9ebed"
          }}
          placeholder="Write your status"
          value={desc}
          onChange={setDesc}
        />
        <Pressable style={AppStyle.button} onPress={handleSubmit}>
          <Text style={AppStyle.textButton}>Share</Text>
        </Pressable>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
      }}>
        <TouchableOpacity onPress={handleChooseFile}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Feather name="image" size={20} color="#4CB256" />
            <Text style={{ color: "#4CB256" }}>Image</Text>
          </View>
        </TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Feather name="video" size={20} color="#4A4EB7" />
          <Text style={{ color: "#4A4EB7" }}>Video</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Feather name="map-pin" size={20} color="#EF5757" />
          <Text style={{ color: "#EF5757" }}>Location</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Feather name="calendar" size={20} color="#E1AE4A" />
          <Text style={{ color: "#E1AE4A" }}>Schedule</Text>
        </View>
      </View>
      {image && <Image source={{ uri: image.uri }} style={{ width: "auto", height: 200, resizeMode: "contain" }} />}
    </View>
  )
}
