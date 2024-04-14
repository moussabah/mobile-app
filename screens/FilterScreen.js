import React, {useMemo, useState} from 'react';
import {Button, ScrollView, StyleSheet, View} from "react-native";
import CustomInput from "../components/CustomInput";
import {Label} from "../components/Label";
import FakerService from "../services/FakerService";
import {Picker} from "@react-native-picker/picker";

function FilterScreen({navigation}) {
    const [criteria, setCriteria] = useState({
        keyword: '',
        theme:'',
        date: '',
        location:'',
        edition: null,
    });
    const fakerService = new FakerService();
    const editions = useMemo(() => {
        return fakerService.getEditions();
    }, [])
    const onFilter = () => {
        criteria.name =
        navigation.navigate("EventScreen", criteria)
    }

    const onSetCriteria = (name, value) => {
        setCriteria({
            ...criteria,
            [name]:value
        })
    }
    return (
        <ScrollView style={componentsStyles.container}>
            <Label name="Édition:" />
            <View style={componentsStyles.pickerContainer}>
                <Picker
                    style={componentsStyles.picker}
                    selectedValue={null}
                    onValueChange={(value) => onSetCriteria('edition', value)}
                >
                    {
                        editions.map(edition => {
                            return <Picker.Item style={componentsStyles.pickerItem} key={edition.value} label={edition.label} value={edition.value} />
                        })
                    }
                </Picker>
            </View>
            <Label name="Mots clés:" />
            <CustomInput placeholder={"Ex: Danse, Voyage, Fête"} onChange={(value) => onSetCriteria('keyword', value)}/>
            <Label name="Thème:" />
            <CustomInput placeholder={"Ex: Conférence"} onChange={(value) => onSetCriteria('theme', value)}/>
            <Label name="Lieu:" />
            <CustomInput placeholder={"Ex: Rennes"} onChange={(value) => onSetCriteria('location', value)}/>
            <Label name="Date:" />
            <CustomInput placeholder={"DD/MM/YYYY"} onChange={(value) => onSetCriteria('date', value)}/>
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