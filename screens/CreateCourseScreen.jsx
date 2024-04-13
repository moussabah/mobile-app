import React, {useEffect, useState} from "react";
import TagService from "../services/TagService";
import Course from "../models/Course";
import CourseValidator from "../services/CourseValidator";
import CourseService from "../services/CourseService";
import componentStyles from "./CSS/styles";
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import {Label} from "../components/Label";
import CustomInput from "../components/CustomInput";
import EventStorage from "../services/storages/EventStorage";
import CheckBox from "expo-checkbox";

function CreateCourseScreen({navigation}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedEvents, setSelectedEvents] = useState([]); // État pour stocker les événements sélectionnés
    const [availableEvents, setAvailableEvents] = useState([]); // État pour stocker les événements disponibles
    useEffect(() => {
        // Récupérer les événements disponibles à partir du service EventStorage lors du montage du composant
        const eventStorage = new EventStorage();
        eventStorage.getAll().then(events => {
            setAvailableEvents(events);
        }).catch(error => {
            console.error("Erreur lors de la récupération des événements :", error);
        });
    }, []);
    // Fonction pour gérer la sélection des événements
    const handleEventSelection = (eventId) => {
        if (selectedEvents.includes(eventId)) {
            setSelectedEvents(selectedEvents.filter(id => id !== eventId)); // Si l'événement est déjà sélectionné, le supprimer de la liste
        } else {
            setSelectedEvents([...selectedEvents, eventId]); // Sinon, l'ajouter à la liste
        }
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
                navigation.navigate("UserCourse");
                return
            }
            alert("Le parcours n'a pas été crée :)")
        });
    }

    return (
        <ScrollView style={{...Styles.container, ...{paddingHorizontal: 15, paddingVertical: 10,}}}>
            <Label name="Titre du parcours:" />
            <CustomInput onChange={(value) => onChange("title", value)}/>
            <Label name="Mots clés:"/>
            <CustomInput placeholder={"Ex: test, test, etc."} onChange={(value) => setTags(value)}/>
            <Label name="Description" />
            <TextInput
                onChangeText={(value) => onChange("description", value)}
                style={componentStyles.textArea}
                multiline={true}
                numberOfLines={10}
            />
            <Label name="Les évenements" />
            <Text>Liste des événements disponibles:</Text>
            <ScrollView>
                {availableEvents.map((event, index) => (
                    <View key={index}>
                        <CheckBox
                            value={selectedEvents.includes(event.id)}
                            onValueChange={() => handleEventSelection(event.id)}
                        />
                        <Text>{event.title}</Text>
                        <Text>{event.description}</Text>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity style={componentStyles.btn} onPress={onSubmit}>
                <Text style={componentStyles.btnText}>Créer</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
componentStyles;
export default CreateCourseScreen;