import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

function CourseCard({course,navigation}) {
    const data = {
        "identifiant": "44075578",
        "titre_fr": "Un fablab \u00e0 la biblioth\u00e8que !",
        "image": "https://cibul.s3.amazonaws.com/event_ateliers-de-materiel-numerique_505_551707.jpg",
        "resume_horaires_fr": "Mercredi 11 octobre 2017, 14h00",
        "description_longue_fr": "D\u00e9monstration et d\u00e9couverte des outils fablab. Au programme : impression 3D, d\u00e9coupe laser, broderie num\u00e9rique. Rencontres et focus sur la th\u00e9matique du textile.\n\nIcon made by Freepikfrom www.flaticon.com",
        "description_longue_html_fr": "<p>D\u00e9monstration et d\u00e9couverte des outils fablab. Au programme : impression 3D, d\u00e9coupe laser, broderie num\u00e9rique. Rencontres et focus sur la th\u00e9matique du textile.</p>\n<p>Icon made by Freepikfrom <a href=\"//www.flaticon.com\" class=\"url\" target=\"_blank\">www.flaticon.com</a></p>"
    }
    const onPressHandler = () => {
        navigation.navigate('EventDetail', {
            event: data
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