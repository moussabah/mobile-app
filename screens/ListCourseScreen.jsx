import React, {useEffect, useMemo, useState} from 'react';
import {Styles} from "../assets/styles/Styles";
import {Button, FlatList, ScrollView, StyleSheet, TextInput, View} from "react-native";
import FilterService from "../services/FilterService";
import Tag from "../components/Tag";
import CourseCard from "../components/CourseCard";
import CourseStorage from "../services/storages/CourseStorage";

function ListCourseScreen({route, navigation}) {
    const params = route.params;
    if (params !== undefined){
        FilterService.filterByCriteria([], params);
    }
    const tags = ["Tout", "Parcours1", "Parcours2"];
    const [activeTag, setActiveTag] = useState(null);



    const [availableCourses, setAvailableCourses] = useState([]);
    useEffect(() => {
        const courseStorage = new CourseStorage();
        courseStorage.getAll().then(courses => {
            setAvailableCourses(courses);
        }).catch(error => {
            console.error("Erreur lors de la récupération des parcours :", error);
        });
    }, []);



    const data = useMemo(() => {
        const tab = []
        for (let i = 0; i < 3; i++) {
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

    const onSubmit = () => {
      navigation.navigate("CreateCourseScreen");
    }
    return (
        <View style={Styles.container}>
            <TextInput style={{...Styles.input, ...eventStyles.input}} placeholder={"Recherche"}/>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={eventStyles.tagContainer}>
                {tagsItems()}
            </ScrollView>
            <Button title={'CreateCourseScreen'} onPress={onSubmit}/>
            <FlatList data={availableCourses}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                  <CourseCard course={item} navigation={navigation}/>
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

export default ListCourseScreen;