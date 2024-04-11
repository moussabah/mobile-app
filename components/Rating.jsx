import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Rating(props) {

    const [rate, setRate] = useState(2 );
    const getStarsBtn = () => {
        const numOfStars = 5;
        const stars = [];

        const onPress = (value) => {
            setRate(value);
        }

        for (let i = 0; i < numOfStars; i++) {
            stars.push((
                <TouchableOpacity onPress={() => onPress(i+1)}>
                    <MaterialCommunityIcons size={35} color={rate >= i+1 ? "#dad31c": "#000"} name={rate >= i+1 ? "star" : "star-outline"}/>
                </TouchableOpacity>
            ));
        }
        return stars;
    }

    const onPress = () => {

    }

    return (
        <View style={styles.container}>
            {getStarsBtn()}
        </View>
    );
}


const styles = StyleSheet.create({
   container:{
       flexDirection: "row",
       marginVertical: 12,
   },
    clicked: {
       color: "#dad31c",
    }
});

export default Rating;