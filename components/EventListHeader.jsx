import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EditionComponent from "./EditionComponent";

function EventListHeader({title, action}) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {/*<EditionComponent onPick={(value) => console.log("Hello, world")}/>*/}
            <TouchableOpacity onPress={action}>
                <MaterialCommunityIcons name="plus-circle" size={30} />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        height: 50,
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 15,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
    }
})

export default EventListHeader;