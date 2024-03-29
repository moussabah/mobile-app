import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

function Tag(props) {
    return (
        <TouchableOpacity style={tagStyles.tag}>
            <Text style={tagStyles.text}>{props.name}</Text>
        </TouchableOpacity>
    );
}


const tagStyles = StyleSheet.create({
    tag: {
        display:"flex",
        borderWidth: 1,
        marginRight: 5,
        borderColor: "#989898",
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: "#FFF",
        height: 40,
        justifyContent:"center",
    },
    text: {
        fontSize: 20,
    }
})

export default Tag;