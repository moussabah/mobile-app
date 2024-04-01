import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import {Colors} from "../assets/styles/Colors";
function UserEventScreen({navigation}) {

    function EventItem(){
        return (
        <View style={componentScreen.eventItem}>
            <View style={componentScreen.itemImage}>
                <Text>Image</Text>
            </View>
            <View style={componentScreen.itemDescription}>
                <Text>Description</Text>
            </View>
        </View>
        )
    }

    const onPressAddBtn = () => {
        navigation.navigate("CreateEventScreen")
    }


    return (
        <View style={componentScreen.container}>
            <TouchableOpacity onPress={onPressAddBtn} title="Ajouter un évenement" style={componentScreen.addBtn}>
                <Text style={componentScreen.btnText}>Ajouter un événement</Text>
            </TouchableOpacity>
            <ScrollView>
                <EventItem />
            </ScrollView>
        </View>
    );
}


const componentScreen = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    eventItem: {
        flexDirection:"row"
    },
    itemImage:{
        flex: 1,
        borderWidth: 1,
    },
    itemDescription:{
        flex: 2,
        borderWidth: 1,
    },
    addBtn:{
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems:"center",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    btnText: {
        color: "white",
        fontSize: 18,
    }
})

export default UserEventScreen;