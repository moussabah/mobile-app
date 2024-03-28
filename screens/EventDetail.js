import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";
import HtmlView from "react-native-htmlview";

function EventDetail({route, navigation}) {
    const {event} = route.params;
    console.log(event)
    return (
        <View style={styles.body}>
            <View>
                <Image resizeMode={"contain"} source={{uri: event.image}} height={250}/>
            </View>
            <View>
                <Text style={styles.title}>{event.titre_fr}</Text>
                <Text style={styles.date}>{event.resume_horaires_fr}</Text>
            </View>
            <View style={styles.description}>
                <HtmlView value={event.description_longue_html_fr} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 8,
        paddingTop: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 15,
    },
    description:{
        marginTop: 15,
    },
    date:{
        fontSize: 12,
    }
})

export default EventDetail;