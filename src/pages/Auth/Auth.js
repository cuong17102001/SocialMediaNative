import { Text, View, Image, Button, Pressable, TextInput } from "react-native"
import useStore from "../../store"
import AuthStyle from "./AuthStyle.js"
import logo from "../../img/logo.png"
import AppStyle from "../../../AppStyle.js"
import React from "react"

const Auth = () => {
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("")
    const [firstname, onChangeFirstname] = React.useState("")
    const [lastname, onChangeLastname] = React.useState("")
    const [confirm, onChangeConfirm] = React.useState("")

    const [authPage, setAuthPage] = React.useState(true)

    return (
        <View style={AuthStyle.auth}>
            <Image
                style={AuthStyle.logo}
                source={logo}
            />
            <View>
                {authPage ?
                    <>
                        <TextInput
                            style={AppStyle.input}
                            onChangeText={onChangeFirstname}
                            placeholder="First name"
                            value={firstname}
                        />
                        <TextInput
                            style={AppStyle.input}
                            onChangeText={onChangeLastname}
                            placeholder="Last name"
                            value={lastname}
                        />
                    </>
                    : <View />}



                <TextInput
                    style={AppStyle.input}
                    onChangeText={onChangeUsername}
                    placeholder="Username"
                    value={username}
                />
                <TextInput
                    style={AppStyle.input}
                    onChangeText={onChangePassword}
                    placeholder="Pasword"
                    value={password}
                />

                {authPage ?
                    <TextInput
                        style={AppStyle.input}
                        onChangeText={onChangeConfirm}
                        placeholder="Confirm Password"
                        value={confirm}
                    /> : <View />
                }

            </View>
            <Pressable style={AppStyle.button}>
                <Text style={AppStyle.textButton}>Login</Text>
            </Pressable>

            <Text onPress={() => setAuthPage(!authPage)} style={{ marginTop: 10, color: "gray" }}>{authPage ? <Text>Don't have account?</Text> : <Text>Already have account?</Text>}</Text>
        </View>
    )
}

export default Auth