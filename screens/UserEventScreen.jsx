import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Alert} from "react-native";
import {Colors} from "../assets/styles/Colors";
import EventStorage from "../services/storages/EventStorage";
import UserEventCart from "../components/UserEventCart";
import {Messages} from "../config/message";

function UserEventScreen({navigation}) {

    const [events, setEvents] = useState([]);
    const [d, seD] = useState(0);
    const initData = () => {
        const event = new EventStorage();
        event.getAll().then((res) => res)
            .then(events => setEvents(events))
    }

    useEffect(initData, []);


    const onDeleteItem = (id) => {
        Alert.alert(Messages.fr.alter.delete.title,Messages.fr.confirmMessage, [
            {
                text: Messages.fr.alter.yesBtn,
                onPress: () => {
                    const newEvents =events.filter((event) => event.id !== id)
                    setEvents(newEvents);
                }
            },
            {
                text: Messages.fr.alter.noBtn,
                type: "cancel",
            }
        ])
    }
    const onBrowseItem = (id) => {
        console.log("browse")
    }

    function EventItem() {
        return (
            <FlatList data={events}
                      keyExtractor={(item, index) => {
                          return item + index
                      }}
                      renderItem={(item) => {
                          return  <UserEventCart event={item.item}
                                                 onBrowse={() => onBrowseItem(item.item.id)}
                                                 onDelete={() => onDeleteItem(item.item.id)}
                                                 navigation={navigation}
                          />
                      }}/>
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
            <EventItem/>
        </View>
    );
}


const componentScreen = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    eventItem: {
        flexDirection: "row"
    },
    itemImage: {
        flex: 1,
        borderWidth: 1,
    },
    itemDescription: {
        flex: 2,
        borderWidth: 1,
    },
    addBtn: {
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
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