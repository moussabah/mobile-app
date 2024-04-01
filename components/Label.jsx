import {StyleSheet, Text} from "react-native";
import React from "react";

export function Label(props){
    return <Text  style={{...componentStyles.label, marginTop: 12, ...props.style}}>{props.name}</Text>
}

const componentStyles = StyleSheet.create({
    label:{
        fontSize: 20,
    }
})