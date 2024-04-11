import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Rating(props) {
    const NUM_OF_STARS = 5;
    const [rate, setRate] = useState(5);
    const getStarsBtn = () => {
        const stars = [];
        const onPress = (value) => {
            setRate(value);
            props.onPress(value);
        }

        for (let i = 0; i < NUM_OF_STARS; i++) {
            stars.push((
                <TouchableOpacity onPress={() => onPress(i+1)}>
                    <MaterialCommunityIcons size={35} color={rate >= i+1 ? "#dad31c": "#000"} name={rate >= i+1 ? "star" : "star-outline"}/>
                </TouchableOpacity>
            ));
        }
        return stars;
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
   },
    clicked: {
       color: "#dad31c",
    }
});

export default Rating;