import React from "react";
import { Dimensions, Image, Text, TextInput, View } from "react-native"
import logo from '../../img/logo.png'
import { FontAwesome } from '@expo/vector-icons'; 

export const Header = () => {
  const windowWidth = Dimensions.get('window').width;
  const [search, setOnChangeSearch] = React.useState("")

  return (
    <View style={{ 
      height: 80, 
      borderBottomColor: "#c4c4c4", 
      borderBottomWidth: 1, 
      width: windowWidth,
      flexDirection : "row",
      justifyContent : "space-between",
      paddingTop : 20,
      backgroundColor : "#fafafa"
    }}>
      <View style={{flexDirection: "row" , justifyContent : "center" , alignItems :"center" , marginLeft : 20}}>
        <Image source={logo} style={{ width: 30, height: 30, resizeMode: 'contain', }} />
        <Text style={{color : "orange" , fontSize : 20 }}>Pearl</Text>
      </View>

     <View style={{
      flexDirection: "row" , justifyContent : "center" , alignItems :"center" , marginRight : 20
     }}>
     <TextInput
        onChangeText={setOnChangeSearch}
        placeholder="Search"
        value={search}
        style={{
          height: 40,
          margin: 12,
          width: 200,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "orange",
          padding: 10,
        }}
      />
      <FontAwesome style={{color:"#bdbdbd"}} name="search" size={24} color="black" />
     </View>
    </View>
  )
}
