import React, {useMemo, useState} from 'react';
import {Styles} from "../assets/styles/Styles";
import {FlatList, ScrollView, StyleSheet, TextInput, View} from "react-native";
import EventCard from "../components/EventCard";
import FilterService from "../services/FilterService";
import Tag from "../components/Tag";

function ListEventScreen({route, navigation}) {
    const params = route.params;
    if (params !== undefined){
        FilterService.filterByCriteria([], params);
    }
    const tags = ["Tout", "Informatique", "Science", "Programmation", "IA", "École", "Business"]
    const [activeTag, setActiveTag] = useState(null);

    const data = useMemo(() => {
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