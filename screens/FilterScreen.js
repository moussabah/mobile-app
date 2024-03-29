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
        navigation.navigate("EventScreen", {
            keyword,
            theme,
            location,
            date,
        })
    }

    function Label(props){
        return <Text  style={{...filterStyle.label, marginTop: 12, ...props.style}}>{props.name}</Text>
    }

    return (
        <ScrollView style={Styles.container}>

            <Label name="Mot clés:" />
            <CustomInput placeholder={"Ex: Danse, Voyage, Fête"} />
            <Label name="Thème:" />
            <CustomInput placeholder={"Ex: Conférence"}/>
            <Label name="Lieu:" />
            <CustomInput placeholder={"Ex: Rennes"} />
            <Label name="Date:" />
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