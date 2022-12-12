import { useEffect } from "react";
import { Text, View, Button, Dimensions, ScrollView } from "react-native"
import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/Posts";
import { ShareCard } from "../../components/ShareCard/ShareCard";
import useStore from "../../store"
import env from "../../../env.json"
import axios from "axios"

const Home = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeigh = Dimensions.get('window').height;

    const currentUser = useStore((state) => state.currentUser)
    const setListPosts = useStore((state) => state.setListPosts)

    useEffect(() => {
        axios.get(env.API_URL+'/post/'+currentUser._id+"/timeline")
            .then(function (response) {
                if (response.data) {
                    setListPosts(response.data.pop().followingPosts)
                  }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <View style={{ alignItems: "center" }}>
            <Header />
            <ScrollView
            // contentOffset={{x:0 , y:500}}
            endFillColor="pink"
            style={{ width: windowWidth, height: windowHeigh }}>
                <ShareCard />
                <Posts />
            </ScrollView>
        </View>
    )
}

export default Home