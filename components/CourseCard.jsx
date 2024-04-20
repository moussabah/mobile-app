import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

function CourseCard({course,navigation}) {
    const onPressHandler = () => {
        navigation.navigate('CourseDetail', {
            course,
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <View>
                <View>
                    <Text style={styles.title}>{course.title}</Text>
                </View>
                <View style={styles.description}>
                    <Text>{course.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: "#bdbcbc",
        elevation: 3,
        marginVertical: 4,
        flex: 1,
        borderRadius: 2,
    },
    image: {
        height: 200,
        resizeMode: "contain"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    description:{
        marginVertical: 8,
    }
})
export default CourseCard;