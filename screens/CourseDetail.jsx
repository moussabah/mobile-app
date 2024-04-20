import React from 'react';
import {Text, View, StyleSheet, FlatList, ScrollView} from "react-native";
import HtmlView from "react-native-htmlview";
import EventCard from "../components/EventCard";

function CourseDetail({route, navigation}) {
    const {course} = route.params;
    return (
        <ScrollView style={styles.body}>
            <View>
                <Text style={styles.title}>{course.title}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>{course.description}</Text>
            </View>
            <View style={styles.eventContainer}>
                <Text style={{fontSize: 20,fontWeight: "bold", marginVertical: 10,}}>Évenements:</Text>
                {course.events.map(event => {
                   return <EventCard event={event} navigation={navigation}/>
                })}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 5,
        paddingTop: 2,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    description:{
      marginVertical: 10,
    },
    descriptionText:{
        fontSize: 20,
    },
    date:{
        fontSize: 12,
    },
    eventContainer:{
        backgroundColor:"#FFF",
    }
})

export default CourseDetail;