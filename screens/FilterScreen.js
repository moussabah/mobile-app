import React, {useMemo, useState} from 'react';
import {Button, ScrollView, StyleSheet, View} from "react-native";
import CustomInput from "../components/CustomInput";
import {Label} from "../components/Label";
import FakerService from "../services/FakerService";
import {Picker} from "@react-native-picker/picker";

function FilterScreen({navigation}) {

    const [keyword, setKeyword] = useState("");
    const [theme, setTheme] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [editionSelected, setEditionSelected] = useState(null);
    const fakerService = new FakerService();
    const editions = useMemo(() => {
        return fakerService.getEditions();
    }, [])

    const onFilter = () => {
        navigation.navigate("EventScreen", {
            keyword,
            theme,
            location,
            date,
        })
    }

    const onSelectEdition = (value) => {
        setEditionSelected(value)
    };
    return (
        <ScrollView style={componentsStyles.container}>
            <Label name="Édition:" />
            <View style={componentsStyles.pickerContainer}>
                <Picker
                    style={componentsStyles.picker}
                    selectedValue={null}
                    onValueChange={onSelectEdition}
                >
                    {
                        editions.map(edition => {
                            return <Picker.Item style={componentsStyles.pickerItem} key={edition.value} label={edition.label} value={edition.value} />
                        })
                    }
                </Picker>
            </View>
            <Label name="Mots clés:" />
            <CustomInput placeholder={"Ex: Danse, Voyage, Fête"} onChange={(value) => setKeyword(value)}/>
            <Label name="Thème:" />
            <CustomInput placeholder={"Ex: Conférence"} onChange={(value) => setTheme(value)}/>
            <Label name="Lieu:" />
            <CustomInput placeholder={"Ex: Rennes"} onChange={(value) => setLocation(value)}/>
            <Label name="Date:" />
            <CustomInput placeholder={"DD/MM/YYYY"} onChange={(value) => setDate(value)}/>
            <View style={componentsStyles.searchBtn}>
                <Button title={"Rechercher"} onPress={onFilter}/>
            </View>
        </ScrollView>
    );
}


const componentsStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    searchBtn: {
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    picker: {

    },
    pickerContainer: {
        borderWidth: 1,
        marginTop: 8,
        backgroundColor: "#FFF",
        borderRadius: 8,
        paddingHorizontal: 5,
        borderColor: "#a8a8a8"
    },
    pickerItem:{
        fontSize: 18,
    }
})

export default FilterScreen;