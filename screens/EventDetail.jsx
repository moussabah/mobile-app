import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from "react-native";
import HtmlView from "react-native-htmlview";
import Rating from "../components/Rating";
import RatingService from "../services/RatingService";

function EventDetail({route, navigation}) {
    const {event} = route.params;
    const [rate, setRate] = useState(event.rate ?? 0);
    const ratingService = new RatingService();
    const onRate = (value) => {
        ratingService
            .rateEvent(event, value)
            .then(res => setRate(value))
    }


    return (
        <View style={styles.body}>
            <View style={styles.image}>
                <Image resizeMode={"contain"} source={{uri: event.getImage()}} height={250}/>
            </View>
            <Rating value={rate} onPress={(value) => onRate(value)} />
            <Text style={styles.rate}>({event.rate}/5)</Text>
            <View>
                <Text style={styles.title}>{event.name}</Text>
                <Text style={styles.date}>{event.dateBegin}</Text>
            </View>
            <View style={styles.description}>
                <HtmlView value={event.description} />
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
    },
    rate: {
        fontSize: 18,
        fontWeight: "bold"
    },
    image:{
        marginBottom: 10,
    }
})

export default EventDetail;