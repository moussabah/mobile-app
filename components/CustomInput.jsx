import React from 'react';
import {Styles} from "../assets/styles/Styles";
import {StyleSheet, TextInput} from "react-native";
import Event from "../models/Event";

function CustomInput(props) {
    const {disable, keyboardType} = props;


    return (
        <TextInput
            value={props.value}
            editable={disable === undefined || disable === false} onChangeText={props.onChange} style={
            {
                ...Styles.input,
                ...styles.input,
                ...props.styles,
                ... {
                    backgroundColor: disable !== undefined && disable === true ? "#c9c9c9":"#FFF",
                }
            }
        }
            placeholder={props.placeholder}
            keyboardType={keyboardType !== undefined ? keyboardType : "default"}
        />
    );
}

const styles =  StyleSheet.create({
    input: {
        marginTop: 5,
    },
})

export default CustomInput;