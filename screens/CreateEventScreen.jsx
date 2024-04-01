import React, {useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import CustomInput from "../components/CustomInput";
import {Label} from "../components/Label";
import CheckBox from "expo-checkbox";

function CreateEventScreen(props) {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <ScrollView style={{...Styles.container, ...{paddingHorizontal: 15}}}>
            <Label name="Nom de l'événement:" />
            <CustomInput/>
            <Label name="Adresse:" />
            <CustomInput />
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
            <CustomInput disbale={toggleCheckBox}/>
            <Label name="Date de début:" />
            <CustomInput placeholder={"Ex: 01/12/2023"} />
            <Label name="Date de fin:" />
            <CustomInput placeholder={"Ex: 31/12/2023"} />
        </ScrollView>
    );
}

export default CreateEventScreen;