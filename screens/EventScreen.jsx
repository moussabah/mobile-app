import React, {useMemo, useState} from 'react';
import {ScrollView, FlatList, View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import EventCard from "../components/EventCard";
import {Styles} from "../assets/styles/Styles";
import Tag from "../components/Tag";
import tag from "../components/Tag";

function EventScreen({navigation}) {

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

export default EventScreen;