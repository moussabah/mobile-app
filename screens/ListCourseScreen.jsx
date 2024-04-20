import React, {useEffect, useMemo, useState} from 'react';
import {Styles} from "../assets/styles/Styles";
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import FilterService from "../services/FilterService";
import Tag from "../components/Tag";
import CourseCard from "../components/CourseCard";
import CourseStorage from "../services/storages/CourseStorage";
import styles from "./CSS/styles";
import componentStyles from "./CSS/styles";

function ListCourseScreen({route, navigation}) {
    const [courses, setCourses] = useState([]);


    const onNavigate = () => {
        navigation.navigate('CreateCourseScreen')
    }



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
            <TouchableOpacity style={eventStyles.floatBtn} onPress={onNavigate}>
                <Text style={eventStyles.floatBtnText}>+</Text>
            </TouchableOpacity>
            <TextInput style={{...Styles.input, ...eventStyles.input, marginTop: 5,}} placeholder={"Recherche"}/>
            <FlatList data={courses}
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
    },
    floatBtn:{
        position:"absolute",
        bottom: 20,
        right: 20,
        justifyContent:"center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor:"#FFF",
        elevation: 10,
        zIndex: 10,
    },
    floatBtnText: {
        fontSize: 25,
        fontWeight:"bold",
    }
})

export default ListCourseScreen;