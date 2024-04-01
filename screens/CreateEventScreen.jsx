import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import CustomInput from "../components/CustomInput";
import {Label} from "../components/Label";
import CheckBox from "expo-checkbox";
import Event from "../models/Event";
import {Colors} from "../assets/styles/Colors";
import menuScreen from "./MenuScreen";

function CreateEventScreen(props) {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const event = {
        isFree: false,
    }
    const [tags, setTags] = useState("");

    const onChange = (name, value) => {
        console.log(name)
        if (name !== "tags"){
            event[name] = value;
        }
    }

    const onSubmit = () => {
        const data = new Event();
        let msg = "";
        if (!event.name){
            msg = "Le nom ne peut être vide";
        }
        if (!event.address){
            msg = "L'adresse ne peut être vide";
        }
        if (!event.dateBegin){
            msg = "La date de début ne peut être vide";
        }
        if (!event.dateEnd){
            msg = "La date de fin ne peut être vide";
        }
        if (!event.isFree && (event.price === undefined || event.price === "")){
            msg = "Le prix ne peut être vide";
        }
        if (!event.description){
            msg = "La description ne peut être vide";
        }
        if (msg !== ""){
            alert(msg)
            return;
        }
        data.isFree = event.isFree;
        data.price = event.price
        data.description = event.description
        data.name = event.name;
        data.address = event.address;
        data.dateBegin = event.dateBegin;
        data.dateEnd = event.dateEnd;
    }

    return (
        <ScrollView style={{...Styles.container, ...{paddingHorizontal: 15, paddingVertical: 10,}}}>
            <Label name="Nom de l'événement:" />
            <CustomInput onChange={(value) => onChange("name", value)}/>
            <Label name="Adresse:"/>
            <CustomInput onChange={(value) => onChange("address", value)}/>
            <Label name="Email:"/>
            <CustomInput onChange={(value) => onChange("email", value)}/>
            <Label name="Mots clés:"/>
            <CustomInput placeholder={"Ex: Danse, Dessin, etc."} onChange={(value) => setTags(value)}/>
            <View style={{flexDirection: "row", alignItems: "baseline"}}>
                <Label name="Prix (€):  " />
                <Text style={{fontSize: 18}}>Gratuit: </Text>
                <CheckBox
                    style={{marginTop: 10}}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
            </View>
            <CustomInput keyboardType="numeric"  disbale={toggleCheckBox} onChange={(value) => onChange("price", value)}/>
            <Label name="Date de début:"/>
            <CustomInput placeholder={"Ex: 01/12/2023"} onChange={(value) => onChange("dateBegin", value)}/>
            <Label name="Date de fin:" />
            <CustomInput placeholder={"Ex: 31/12/2023"} onChange={(value) => onChange("dateEnd", value)}/>
            <Label name="Description" />
            <TextInput
                onChangeText={(value) => onChange("description", value)}
                style={componentStyles.textArea}
                multiline={true}
                numberOfLines={10}
                />
            <TouchableOpacity style={componentStyles.btn} onPress={onSubmit}>
                <Text style={componentStyles.btnText}>Créer</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}


const componentStyles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 10,
        justifyContent:"center",
        alignItems:"center",
        marginVertical: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    btnText: {
      fontSize: 18,
        color: "white"
    },
    textArea: {
        borderWidth: 1,
        borderColor: "#afafaf",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.75)",
        textAlignVertical:"top",
        padding: 10,
        fontSize: 18,
    }
})

export default CreateEventScreen;