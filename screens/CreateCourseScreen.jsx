import React, {useCallback, useEffect, useState} from "react";
import TagService from "../services/TagService";
import Course from "../models/Course";
import CourseValidator from "../services/CourseValidator";
import CourseService from "../services/CourseService";
import componentStyles from "./CSS/styles";
import {ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {Styles} from "../assets/styles/Styles";
import {Label} from "../components/Label";
import CustomInput from "../components/CustomInput";
import EventStorage from "../services/storages/EventStorage";
import CheckBox from "expo-checkbox";
import {useFocusEffect} from "@react-navigation/native";
import {Picker} from "@react-native-picker/picker";
import styles from "./CSS/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {assertSourceType, msg} from "@babel/core/lib/config/validation/option-assertions";
import {Tag} from "../models/Tag";
import tag from "../components/Tag";

function CreateCourseScreen({navigation}) {
    const initialData = {
        title: null,
        events: [],
        description: null,
        isPublished: false,
        tags: [],
    }
    const [title, setTitle] = useState("");
    const [eventSelected, setEventSelected] = useState(null);
    const [availableEvents, setAvailableEvents] = useState([]);
    const [courses, setCourses] = useState(initialData);
    const courseService = new CourseService();
    const courseValidator = new CourseValidator();

    useFocusEffect(useCallback(() => {
        initData()
        return () => {}
    }, []));

    const onSelectEvent = (value) => {
        setEventSelected(value);
        const index = courses.events.findIndex(e => e.name === value.name);
        if (index == -1){
            setCourses({
                ...courses,
                events: [
                    ...courses.events,
                    value,
                ]
            })
        }
    }

    const onSetCourse  = (name, value) => {
        setCourses({
            ...courses,
            [name]:value,
        })
    }

    const initData = () => {
        const courseService = new CourseService();
        const eventStorage = new EventStorage();
        eventStorage.getAll().then(events => {
            setAvailableEvents(events);
        }).catch(error => {
            console.error("Erreur lors de la récupération des événements :", error);
        });
    }

    const onSubmit = async () => {
        const error = courseValidator.validate(courses);
        if (error != null){
            alert(error)
            return
        }
        await courseService.create(courses);
        navigation.navigate('CourseList');
    }


    const eventSelectedComponent = () => {
        const selected = [];

        const onPress = (event) => {
            const newSelected = courses.events.filter(i => i.name !== event.name);
            setCourses({
                ...courses,
                events: newSelected,
            })
        }

        courses.events.forEach(function(item, index){
            selected.push(
                <View key={index} style={screenStyles.eventSelected}>
                    <Text style={screenStyles.eventSelectedText}>{item.name}</Text>
                    <TouchableOpacity onPress={() => onPress(item)}>
                        <MaterialCommunityIcons name="delete"  color="red"  size={20}/>
                    </TouchableOpacity>
                </View>
            )
        });
        return selected;
    }

    const onSetTag = (value) => {
        let tags = [];
        if (value.trim().length !== 0){
            tags = value.split(',').map(name => new Tag(name))
        }
        setCourses({
            ...courses,
            tags,
        })
    }

    return (
        <ScrollView style={{...Styles.container, ...{paddingHorizontal: 15, paddingVertical: 10,}}}>
            <View style={Styles.pickerContainer}>
                <Picker
                    selectedValue={eventSelected}
                    onValueChange={(value) => onSelectEvent(value)}
                >
                    {
                        availableEvents.map((event, index) => {
                            return <Picker.Item style={Styles.pickerItem} key={index} label={event.name} value={event} />
                        })
                    }
                </Picker>
            </View>
            {courses.events.length == 0 || (
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={screenStyles.tagContainer}>
                    {eventSelectedComponent()}
                </ScrollView>
            )}
            <Label name="Titre du parcours:" />
            <CustomInput onChange={(value) => onSetCourse("title", value)}/>
            <Label name="Mots clés:" />
            <CustomInput placeholder={"Ex: test, test, etc."} onChange={(value) => onSetTag(value)}/>
            <Label name="Description" />
            <TextInput
                onChangeText={(value) => onSetCourse("description", value)}
                style={componentStyles.textArea}
                multiline={true}
                numberOfLines={10}
            />
            <Label name="Published"/>
            <CheckBox
                value={courses.isPublished}
                onValueChange={(value) => onSetCourse('isPublished', value)}
            />
            <TouchableOpacity style={componentStyles.btn} onPress={onSubmit}>
                <Text style={componentStyles.btnText}> Créer </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}


const screenStyles = StyleSheet.create({
    tagContainer: {
        marginTop: 5,
        paddingTop:1,
    },
    eventSelected: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding: 5,
        borderRadius: 10,
        backgroundColor:"#FFF",
        marginRight: 8,
    },
    eventSelectedText: {
        fontSize: 20,
        marginRight: 10,
    }
})
export default CreateCourseScreen;