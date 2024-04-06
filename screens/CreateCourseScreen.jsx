import React, {useState} from "react";
import TagService from "../services/TagService";
import Course from "../models/Course";
import CourseValidator from "../services/CourseValidator";
import CourseService from "../services/CourseService";
import componentStyles from "./CSS/styles";
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import {Label} from "../components/Label";
import CustomInput from "../components/CustomInput";
import CheckBox from "expo-checkbox";

function CreateCourseScreen({navigation}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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
                navigation.navigate("UserEvent");
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
            <CustomInput placeholder={"Ex: Danse, Dessin, etc."} onChange={(value) => setTags(value)}/>
            <Label name="Description" />
            <TextInput
                onChangeText={(value) => onChange("description", value)}
                style={componentStyles.textArea}
                multiline={true}
                numberOfLines={10}
            />
            <TouchableOpacity style={componentStyles.btn} onPress={onSubmit}>
                <Text style={componentStyles.btnText}>Créer</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
componentStyles;
export default CreateCourseScreen;