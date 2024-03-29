import React, {useMemo} from 'react';
import {ScrollView, FlatList, View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import EventCard from "../components/EventCard";
import {Styles} from "../assets/styles/Styles";
import Tag from "../components/Tag";

function EventScreen({navigation}) {

    const data = useMemo(() => {
        const tab = []
        for (let i = 0; i < 100; i++) {
            tab[i] = {id: i};
        }
        return tab
    }, [])

    return (
        <View style={Styles.container}>
            <TextInput style={{...Styles.input, ...eventStyles.input}} placeholder={"Recherche"}/>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={eventStyles.tagContainer}>
                <Tag name={"Informatique"}/>
                <Tag name={"Science"}/>
                <Tag name={"Hackathon"}/>
                <Tag name={"Hackathon"}/>
                <Tag name={"Hackathon"}/>
                <Tag name={"Hackathon"}/>
            </ScrollView>
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
    },
    tagContainer: {
        marginTop: 5,
        paddingTop:1,
        height: 54,
    }
})

export default EventScreen;