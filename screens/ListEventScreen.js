import React, {useEffect, useMemo, useState} from 'react';
import {Styles} from "../assets/styles/Styles";
import {FlatList, ScrollView, StyleSheet, TextInput, View} from "react-native";
import EventCard from "../components/EventCard";
import FilterService from "../services/FilterService";
import EventService from "../services/EventService";
import Tag from "../components/Tag";

function ListEventScreen({route, navigation}) {
    const eventService = new EventService();
    let eventList = [];

    const params = route.params;
    if (params !== undefined && params.criteria != null) {
        FilterService.filterByCriteria(params.criteria);
    }
    const tags = ["Tout", "Informatique", "Science", "Programmation", "IA", "École", "Business"]
    const [activeTag, setActiveTag] = useState(null);
    const [events, setEvents] = useState([]);
    let page = 0, limit = 10;


    useEffect(() => {
        eventService.getAllWithPagination(page, limit)
            .then(response => response.json())
            .then(res => {
                setEvents(res.content);
                console.log(res.content)
            })
            .catch((error) => {
                console.error('Error fetching events:', error);
            })
    }, []);

    function tagHandler(i) {
        setActiveTag(i)
    }

    const tagsItems = () => {
        const tagsItems = [];
        for (let i = 0; i < tags.length; i++) {
            tagsItems.push(<Tag name={tags[i]} key={i} active={activeTag === i} onPress={() => tagHandler(i)}/>)
        }
        return tagsItems;
    };


    return (
        <View style={Styles.container}>
            <TextInput style={{...Styles.input, ...eventStyles.input}} placeholder={"Recherche"}/>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={eventStyles.tagContainer}>
                {tagsItems()}
            </ScrollView>
            <FlatList data={events}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({item}) => (
                          <EventCard event={item} navigation={navigation}/>
                      )}
            />
        </View>
    );
}

const eventStyles = StyleSheet.create({
    tagContainer: {
        marginTop: 5,
        paddingTop: 1,
        height: 54,
    }
})

export default ListEventScreen;