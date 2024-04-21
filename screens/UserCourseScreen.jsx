import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors} from "../assets/styles/Colors";
import UserCourseCard from "../components/UserCourseCard";
import CourseStorage from "../services/storages/CourseStorage";
import {useFocusEffect} from "@react-navigation/native";

function UserCourseScreen({navigation}) {

    const [courses, setCourses] = useState([]);
    const [d, seD] = useState(0);
    const initData = () => {
        const courses = new CourseStorage();
        courses.getAll().then((res) => res)
            .then(courses => setCourses(courses))
    }


    useFocusEffect(useCallback(() => {
        initData()
        console.log(courses.length)
        return () => {}
    }), [])

    function CourseItem() {
        return (
            <FlatList data={courses}
              keyExtractor={(item, index) => {
                  return item + index
              }}
              renderItem={(item) => <UserCourseCard course={item.item} navigation={navigation}/>}/>
        )
    }

    const onPressAddBtn = () => {
        navigation.navigate("CreateCourseScreen")
    }


    return (
        <View style={componentScreen.container}>
            <TouchableOpacity onPress={onPressAddBtn} title="Ajouter un parcours" style={componentScreen.addBtn}>
                <Text style={componentScreen.btnText}>Ajouter un parcours</Text>
            </TouchableOpacity>
            <CourseItem/>
        </View>
    );
}

const componentScreen = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    courseItem: {
        flexDirection: "row"
    },
    itemImage: {
        flex: 1,
        borderWidth: 1,
    },
    itemDescription: {
        flex: 2,
        borderWidth: 1,
    },
    addBtn: {
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    btnText: {
        color: "white",
        fontSize: 18,
    }
})

export default UserCourseScreen;