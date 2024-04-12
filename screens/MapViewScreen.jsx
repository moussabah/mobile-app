import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from "react-native";
import MapView, {Marker} from "react-native-maps";
import EventService from "../services/EventService";

function MapViewScreen({navigation}) {

    const eventsServices = new EventService();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventsServices.getAll()
            .then(events => {
                setEvents(events);
            })
    }, [events]);

    function getMarkers(){
        const markets = [];
        for (let i = 0; i < events.length ; i++) {
            markets.push(
                <Marker
                    key={i}
                    coordinate={{
                        latitude: events[i].geolocation.latitude,
                        longitude: events[i].geolocation.longitude,
                    }}
                    title={events[i].name}
                    description={events[i].description}
                    onPress={() => navigation.navigate('EventDetail', {
                        event: events[i]
                    })}
                />
            )
        }
        return markets;
    }

    return (
        <View style={styles.container}>
            {events.length ===  0 ?
                <ActivityIndicator size="large" /> :
                (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 48.8566,
                            longitude: 2.3522,
                            latitudeDelta:  0,
                            longitudeDelta: 0,
                        }}>
                        {getMarkers()}
                    </MapView>
                )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    map: {
        width: "100%",
        height: "100%"
    }
})

export default MapViewScreen;