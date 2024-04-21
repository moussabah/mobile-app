import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Styles} from "../assets/styles/Styles";
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import CourseCard from "../components/CourseCard";;
import CourseService from "../services/CourseService";
import {useFocusEffect} from "@react-navigation/native";

function ListCourseScreen({route, navigation}) {
    const [courses, setCourses] = useState([]);
    const courseService = new CourseService();

    let page = 0, limit = 50;

    useFocusEffect(useCallback( () => {
        courseService.getAllWithPagination(page, limit)
            .then(response => response.json())
            .then(res => {
                setCourses(res.content);
                console.log(courses.length)
            })
            .catch((error) => {
                console.error('Error fetching parcours:', error);
            })
    }, []));

    const onNavigate = () => {
        navigation.navigate('CreateCourseScreen')
    }

    const initData = () => {
        courseService.getAll().then(courses => {
            setCourses(courses)
            console.log({courses})
        })
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
              renderItem={item => (
                  <CourseCard course={item.item} navigation={navigation}/>
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