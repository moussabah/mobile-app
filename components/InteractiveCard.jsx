import React from 'react';
import {Styles} from "../assets/styles/Styles";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

function InteractiveCard(props) {

    const {children, styles, onPress} = props;

    return (
        <TouchableOpacity onPress={onPress} style={componentStyles.gridContainer}>
            {children}
        </TouchableOpacity>
    );
}


const componentStyles = StyleSheet.create({
    gridContainer:{
        flex: 1,
        margin: 5,
        height: 160,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
    }
})

export default InteractiveCard;