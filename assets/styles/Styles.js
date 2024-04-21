import {StyleSheet} from 'react-native'
import {Colors} from "./Colors";

export const Styles = StyleSheet.create({
    border: {
        borderWidth: 1
    },
    p1:{
        padding: 1,
    },
    p2:{
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#afafaf",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.75)",
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 20,
    },
    container:{
        paddingHorizontal: 5,
        flex: 1,
        flexDirection: "column",
        alignContent:"space-around",
    },
    pickerContainer:{
        borderWidth: 1,
        marginTop: 8,
        backgroundColor: "#FFF",
        borderRadius: 8,
        paddingHorizontal: 5,
        borderColor: "#a8a8a8"
    },
    pickerItem:{
        fontSize: 18,
    },
})