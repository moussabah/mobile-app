import React, {useMemo} from 'react';
import {Text, FlatList} from "react-native";
import EventCard from "../components/EventCard";
function EventScreen({navigation}) {

    const data = useMemo(() => {
        const tab = []
        for (let i = 0; i < 100; i++) {
            tab[i] = {id: i};
            console.log(i)
        }
        return tab
    }, [])

    return (
        <FlatList data={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <EventCard event={item} navigation={navigation}/>
            )}
        />
    );
}

export default EventScreen;