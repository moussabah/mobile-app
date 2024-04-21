import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Colors} from "../assets/styles/Colors";

function UserCourseCard({course, navigation}) {
    return (
        <View style={componentStyles.container}>
            <View style={componentStyles.leftSide}>
                <Text style={componentStyles.title}>{course.title}</Text>
                <Text style={componentStyles.description}>{course.description}</Text>
            </View>
            <View style={componentStyles.rightSide}>
                <TouchableOpacity style={componentStyles.eyeBtn}>
                    <MaterialCommunityIcons name="eye" size={30} color={Colors.primary}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="delete" size={30} color={Colors.danger}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const componentStyles = StyleSheet.create({
    deleteBtn: {
        position: "absolute",
        right: 0,
        top: 10,
    },
    container: {
        position: "relative",
        borderWidth: 1,
        borderColor: "FFF",
        marginBottom: 10,
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    description: {
        fontSize: 15,
    },
    leftSide: {
        flex: 1
    },
    rightSide: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    eyeBtn:{
        marginRight: 10,
    }
})

export default UserCourseCard;