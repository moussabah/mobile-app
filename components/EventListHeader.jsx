import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, StyleSheet, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EditionComponent from "./EditionComponent";
import PartyService from "../services/PartyService";
import EventService from "../services/EventService";

function EventListHeader({title, navigation}) {


    const [partys, setEventListHeaders] = useState([]);
    const onPick = (value) => {
        navigation.navigate('')
    }


    const onPressAdd = () => {
        navigation.navigate("CreateEventScreen")
    }

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.action}>
                <EditionComponent style={styles.picker} onPick={(value) => onPick(value)}/>
                <TouchableOpacity onPress={onPressAdd}>
                    <MaterialCommunityIcons name="plus-circle" size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        height: 60,
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        flex: 1
    },
    picker: {
        flex:3,
        height: 40,
        justifyContent:'center',
        marginRight: 10,
    },
    action:{
        flex:4,
        flexDirection:'row',
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        paddingRight: 2
    }
})

export default EventListHeader;