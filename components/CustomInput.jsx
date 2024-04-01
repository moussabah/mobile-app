import React from 'react';
import {Styles} from "../assets/styles/Styles";
import {StyleSheet, TextInput} from "react-native";

function CustomInput(props) {
    const disable = props.disbale;
    return (
        <TextInput editable={disable === undefined || disable === false} onChangeText={props.onChange} style={
            {
                ...Styles.input,
                ...styles.input,
                ...props.styles,
                ... {
                    backgroundColor: disable !== undefined && disable === true ? "#c9c9c9":"#FFF",
                }
            }
        } placeholder={props.placeholder}/>
    );
}

const styles =  StyleSheet.create({
    input: {
        marginTop: 5,
    },
})

export default CustomInput;