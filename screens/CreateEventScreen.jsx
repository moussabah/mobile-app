import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import CustomInput from "../components/CustomInput";
import {Label} from "../components/Label";
import CheckBox from "expo-checkbox";
import Event from "../models/Event";
import {Colors} from "../assets/styles/Colors";
import EventValidator from "../services/EventValidator";

function CreateEventScreen(props) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [isFree, setIsFree] = useState(false);
    const [dateBegin, setDateBegin] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [description, setDescription] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [price, setPrice] = useState(0);
    const event = {
        isFree: false,
    }
    const [tags, setTags] = useState("");

    const onChange = (name, value) => {
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "description":
                setDescription(value)
                break;
            case "price":
                setPrice(Number(value))
                break;
            case "tags":
                setTags(value)
                break;
            case "address":
                setAddress(value)
                break;
            case "dateEnd":
                setDateEnd(value)
                break;
            case "dateBegin":
                setDateBegin(value)
                break;
            case "postalCode":
                setPostalCode(value)
                break;
        }
    }

    const onSubmit = () => {
        const event = new Event();
        event.isFree = isFree;
        event.price = price;
        event.description = description;
        event.name = name;
        event.email = email;
        event.address = address;
        event.dateBegin = dateBegin;
        event.dateEnd = dateEnd;
        event.postalCode = postalCode;
        console.log(postalCode)

        const eventValidator = new EventValidator();
        const errors = eventValidator.validate(event);
        if (errors != null){
            alert(errors);
            return;
        }
        console.log(event);
    }

    return (
        <ScrollView style={{...Styles.container, ...{paddingHorizontal: 15, paddingVertical: 10,}}}>
            <Label name="Nom de l'événement:" />
            <CustomInput onChange={(value) => onChange("name", value)}/>
            <Label name="Adresse:"/>
            <CustomInput onChange={(value) => onChange("address", value)}/>
            <Label name="Code postal:"/>
            <CustomInput keyboardType="numeric" onChange={(value) => onChange("postalCode", value)}/>
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
                    value={isFree}
                    onValueChange={(newValue) => setIsFree(newValue)}
                />
            </View>
            <CustomInput keyboardType="numeric"  disbale={isFree} onChange={(value) => onChange("price", value)}/>
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