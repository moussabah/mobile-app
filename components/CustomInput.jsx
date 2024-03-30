import React from 'react';
import {Styles} from "../assets/styles/Styles";
import {StyleSheet, TextInput} from "react-native";

function CustomInput(props) {
    return (
        <TextInput onChangeText={props.onChange} style={{...Styles.input, ...styles.input, ...props.styles}} placeholder={props.placeholder}/>
    );
}

const styles =  StyleSheet.create({
    input: {
        marginTop: 5,
    },
})

export default CustomInput;