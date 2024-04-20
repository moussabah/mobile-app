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
import {assertSourceType} from "@babel/core/lib/config/validation/option-assertions";

function CreateCourseScreen({navigation}) {
    const initialData = {
        title: null,
        events: null,
        description: null,
        isPublished: false,
        tags: null,
    }
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [eventSelected, setEventSelected] = useState(null);
    const [eventsSelected, setEventsSelected] = useState([]);
    const [availableEvents, setAvailableEvents] = useState([]);
    const [editions, setEditions] = useState([])
    const [courses, setCourses] = useState(initialData);

    useFocusEffect(useCallback(() => {
        initData()
        return () => {}
    }, []));


    const onCourseChange = (name, value) => {

    }

    const onSelectEvent = (value) => {
        setEventSelected(value);
        const index = eventsSelected.findIndex(e => e.name === value.name);
        if (index == -1){
            setEventsSelected([
                ...eventsSelected,
                value
            ])
        }
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

    const isPublished = {
        isPublished: false,
    }
    const [tags, setTags] = useState("");

    const onChange = (name, value) => {
        switch (name) {
            case "title":
                setTitle(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "tags":
                setTags(value)
                break;
        }
    }

    const onSubmit = (value) => {
        const tagService = new TagService();
        const course = new Course();

        course.title = title;
        course.description = description;
        course.isPublished = isPublished;

        const courseValidator = new CourseValidator();
        const errors = courseValidator.validate(course);
        if (errors != null){
            alert(errors);
            return;
        }
        const coursesTag = tagService.format(tags);
        if (coursesTag != null){
            course.tags = coursesTag;
        }
        let courseService = new CourseService();
        courseService.create(course).then((response) => {
            if (response.id != null){
                console.log(response)
                navigation.navigate("UserCourseScreen");
                return
            }
            alert("Le parcours n'a pas été crée :)")
        });
    }


    const eventSelectedComponent = () => {
        const selected = [];

        const onPress = (event) => {
            const newSelected = eventsSelected.filter(i => i.name !== event.name);
            setEventsSelected(newSelected);
        }

        eventsSelected.forEach(function(item, index){
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
            {eventsSelected.length == 0 || (
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={screenStyles.tagContainer}>
                    {eventSelectedComponent()}
                </ScrollView>
            )}
            <Label name="Titre du parcours:" />
            <CustomInput onChange={(value) => onChange("title", value)}/>
            <Label name="Mots clés:" />
            <CustomInput placeholder={"Ex: test, test, etc."} onChange={(value) => setTags(value)}/>
            <Label name="Description" />
            <TextInput
                onChangeText={(value) => onChange("description", value)}
                style={componentStyles.textArea}
                multiline={true}
                numberOfLines={10}
            />
            <Label name="Published"/>
            <CheckBox
                value={isPublished}
                onValueChange={() => true}
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