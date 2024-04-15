import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

function CourseCard({course,navigation}) {

    const data = {};
    const onPressHandler = () => {
        navigation.navigate('CourseDetail', {
            courses: data
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <View>
                <Image source={{uri: data.image}} style={styles.image}/>
            </View>
            <View>
                <View>
                    <Text style={styles.title}>{data.titre_fr}</Text>
                </View>
                <View>
                    <Text>{data.description_longue_fr}</Text>
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
    },
    image: {
        height: 200,
        resizeMode: "contain"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default CourseCard;