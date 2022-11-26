import React from 'react'
import { View } from 'react-native'
import useStore from '../../store'
import { Post } from '../Post/Post'

export const Posts = () => {
    const listPosts = useStore((state) => state.listPosts)
    return (
        <View style={{
            width: "auto",
            margin: 5,
            borderRadius: 10,
            marginBottom : 130
        }}>
            {listPosts.map((post, id) => {
                return <Post data={post} key={id} />
            })}
        </View>
    )
}
