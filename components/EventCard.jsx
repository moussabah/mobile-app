import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {Styles} from "../assets/styles/Styles";
import Event from "../models/Event";

function EventCard({event, navigation}) {

    const data = (new Event()).format(event);

    const onPressHandler = () => {
        navigation.navigate('EventDetail', {
            event: data
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <View>
                <Image source={{uri: data.getImage()}} style={styles.image}/>
            </View>
            <View>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                </View>
                <View>
                    <Text>{data.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: "#bdbcbc",
        elevation: 3,
        marginVertical: 4,
        flex: 1,
    },
    image: {
        height: 200,
        resizeMode: "contain"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default EventCard;