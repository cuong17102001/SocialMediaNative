import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import profileImage from '../../img/default.png'
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export const ShareCard = () => {
  const [image, setImage] = useState(null);
  const handleChooseFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri);

    setImage(result.uri)
    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }

    // console.log("hehehe----" , image);
  }
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
        />
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
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
    </View>
  )
}
