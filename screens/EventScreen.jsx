import React, {useMemo} from 'react';
import {Text, FlatList, View, TextInput, StyleSheet} from "react-native";
import EventCard from "../components/EventCard";
import {Styles} from "../assets/styles/Styles";

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
        <View style={Styles.container}>
            <TextInput style={{...Styles.input, ...eventStyles.input}} placeholder={"Recherche"}/>
            <FlatList data={data}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({item}) => (
                          <EventCard event={item} navigation={navigation}/>
                      )}
            />
        </View>
    );
}

const eventStyles = StyleSheet.create({
    input: {
        marginTop: 5,
    }
})

export default EventScreen;