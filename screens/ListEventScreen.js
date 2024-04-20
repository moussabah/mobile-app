import React, {useMemo, useState} from 'react';
import {Styles} from "../assets/styles/Styles";
import {FlatList, ScrollView, StyleSheet, TextInput, View} from "react-native";
import EventCard from "../components/EventCard";
import FilterService from "../services/FilterService";
import EventService from "../services/EventService";
import Tag from "../components/Tag";
import Event from "../models/Event";
import EventStorage from "../services/storages/EventStorage";

async function ListEventScreen({route, navigation}) {
    //init data
    const eventService = new EventService();
    let eventList = [];

    const params = route.params;
    if (params !== undefined && params.criteria != null) {
        FilterService.filterByCriteria(params.criteria);
    }
    const tags = ["Tout", "Informatique", "Science", "Programmation", "IA", "École", "Business"]
    const [activeTag, setActiveTag] = useState(null);
    let page = 0, limit = 10;
    const data = useMemo(async () => {

        eventService.getAllWithPagination(page, limit).then((response) => {
             eventList  = response.data.data;
             console.log("eventList", eventList)
        })

        /*eventService.getAllWithPagination(page, limit)
            .then((eventList: Event[]) => {
                // Do something with the eventList
                console.log(eventList);
            })
            .catch((error) => {
                // Handle error
                console.error('Error fetching events:', error);
            })
            .finally(() => {
                // Optional: Do something after the promise is settled
            })
            .then((eventList: Event[]) => {
                // Use tap to perform a side effect without changing the data
                tap((eventList: Event[]) => {
                    console.log('Event list fetched:', eventList);
                });
            });*/

        const tab = []
        for (let i = 0; i < 100; i++) {
            tab[i] = {id: i};
        }
        return tab
    }, [])

    function tagHandler(i) {
        setActiveTag(i)
    }

    const tagsItems = () => {
        const tagsItems = [];
        for (let i = 0; i < tags.length; i++) {
            tagsItems.push(<Tag name={tags[i]} key={i} active={activeTag === i} onPress={() => tagHandler(i)}/>)
        }
        return tagsItems;
    }


    return (
        <View style={Styles.container}>
            <TextInput style={{...Styles.input, ...eventStyles.input}} placeholder={"Recherche"}/>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={eventStyles.tagContainer}>
                {tagsItems()}
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
    tagContainer: {
        marginTop: 5,
        paddingTop:1,
        height: 54,
    }
})

export default ListEventScreen;