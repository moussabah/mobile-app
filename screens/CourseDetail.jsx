import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import HtmlView from "react-native-htmlview";

function CourseDetail({route, navigation}) {
    const {course} = route.params;
    console.log(course)
    return (
        <View style={styles.body}>
            <View>
                <Text style={styles.title}>{course.identifiant}</Text>
                <Text style={styles.date}>{course.resume_horaires_fr}</Text>
            </View>
            <View style={styles.description}>
                <HtmlView value={course.description_longue_html_fr} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 8,
        paddingTop: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 15,
    },
    description:{
        marginTop: 15,
    },
    date:{
        fontSize: 12,
    }
})

export default CourseDetail;