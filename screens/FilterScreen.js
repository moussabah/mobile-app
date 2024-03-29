import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import CustomInput from "../components/CustomInput";

function FilterScreen({navigation}) {

    const [keyword, setKeyword] = useState("");
    const [theme, setTheme] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    const onFilter = () => {
        navigation.navigate("EventScreen")
    }

    return (
        <ScrollView style={Styles.container}>
            <Text style={filterStyle.label}>Mots clés:</Text>
            <CustomInput placeholder={"Ex: Danse, Voyage, Fête"} />
            <Text style={{...filterStyle.label, paddingTop: 12,}}>Thème:</Text>
            <CustomInput placeholder={"Ex: Conférence"}/>
            <Text style={{...filterStyle.label, paddingTop: 12,}}>Lieu:</Text>
            <CustomInput placeholder={"Ex: Rennes"} />
            <Text style={{...filterStyle.label, paddingTop: 12,}}>Date:</Text>
            <CustomInput placeholder={"DD/MM/YYYY"}/>
            <View style={{paddingHorizontal: 40, paddingVertical: 20}}>
                <Button title={"Rechercher"} onPress={onFilter}/>
            </View>
        </ScrollView>
    );
}


const filterStyle = StyleSheet.create({
    label:{
        fontSize: 20,
    }
})

export default FilterScreen;