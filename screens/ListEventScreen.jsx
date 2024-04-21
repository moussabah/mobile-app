import React, {useEffect, useMemo, useState} from 'react';
import {Styles} from "../assets/styles/Styles";
import {FlatList, ScrollView, StyleSheet, TextInput, View} from "react-native";
import EventCard from "../components/EventCard";
import FilterService from "../services/FilterService";
import EventService from "../services/EventService";
import Tag from "../components/Tag";

function ListEventScreen({route, navigation}) {

    const MAX_TAG = 10;

    const eventService = new EventService();
    let eventList = [];

    const params = route.params;
    if (params !== undefined && params.criteria != null) {
        FilterService.filterByCriteria(params.criteria);
    }
    const tags = ["Tout", "Informatique", "Science", "Programmation", "IA", "École", "Business"]
    const [activeTag, setActiveTag] = useState(null);
    const [events, setEvents] = useState([]);
    const [eventsFiltered, setEventsFiltered] = useState([]);
    let page = 0, limit = 10;


    useEffect(() => {
        eventService.getAllWithPagination(page, limit)
            .then(response => response.json())
            .then(res => {
                setEvents(res.content);
                setEventsFiltered(res.content);
            })
            .catch((error) => {
                console.error('Error fetching events:', error);
            })
    }, []);

    const onSearch = (value) => {
        if (value.length == 0){
            setEventsFiltered(events)
        }else{
            value = value.trim()
            const res = eventsFiltered.filter(e => {
                console.log({name: e.name})
                const t = e.name
                    .toLowerCase()
                    .includes(value.toLowerCase())
                console.log(t, e.name)
                return t;
            });
            setEventsFiltered(res)
        }
    }

    function tagHandler(i, name) {
        setActiveTag(i)
        if (name ==  "Tout"){
            setEventsFiltered(events);
            return
        }
        let filtered = eventsFiltered.filter(e => {
            return e.tags.findIndex(t => t.tagName === name) != -1;
        })
        setEventsFiltered(filtered)
    }

    const tagsItems = () => {
        let done = false;
        const tagsItems = [];
        tagsItems.push(
            <Tag name={"Tout"} key={-1} active={activeTag === -1} onPress={() => tagHandler(-1, "Tout")}/>
        )
        for (let i = 0; i < events.length; i++) {
            const tags = events[i].tags;
            for (let j = 0; j < tags.length; j++) {
                if (tagsItems.length === MAX_TAG){
                    break;
                }
                tagsItems.push(
                    <Tag name={tags[j].tagName} key={j} active={activeTag === j} onPress={() => tagHandler(j, tags[j].tagName)}/>
                )
            }
        }
        return tagsItems;
    };


    return (
        <View style={Styles.container}>
            <TextInput onChangeText={onSearch} style={{...Styles.input, ...eventStyles.input}} placeholder={"Recherche"}/>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={eventStyles.tagContainer}>
                {tagsItems()}
            </ScrollView>
            <FlatList data={eventsFiltered}
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