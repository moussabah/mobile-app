import React from 'react';
import {Text, FlatList} from "react-native";
import EventCard from "../components/EventCard";

function EventScreen({navigation}) {
    return (
        <FlatList data={[{id: 1}, {id: 2}, {id: 1}, {id: 2}, ]}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <EventCard event={item} navigation={navigation}/>
            )}
        />
    );
}

export default EventScreen;