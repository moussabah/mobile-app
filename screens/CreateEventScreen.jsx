import React, {useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Styles} from "../assets/styles/Styles";
import CustomInput from "../components/CustomInput";
import {Label} from "../components/Label";
import CheckBox from "expo-checkbox";
import Event from "../models/Event";
import {Colors} from "../assets/styles/Colors";
import EventValidator from "../services/EventValidator";
import TagService from "../services/TagService";
import EventService from "../services/EventService";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from 'expo-image-picker';

function CreateEventScreen({route, navigation}) {

    const tagService = new TagService();

    let eventFromUser = null;
    if (route.params && route.params.event){
        eventFromUser = route.params.event;
    }

    const [name, setName] = useState(eventFromUser?.name && "");
    const [address, setAddress] = useState(eventFromUser?.address && "");
    const [email, setEmail] = useState(eventFromUser?.email && "");
    const [isFree, setIsFree] = useState(eventFromUser?.isFree || false);
    const [dateBegin, setDateBegin] = useState(eventFromUser?.dateBegin && "");
    const [dateEnd, setDateEnd] = useState(eventFromUser?.dateEnd && "");
    const [description, setDescription] = useState(eventFromUser?.description && "");
    const [postalCode, setPostalCode] = useState(eventFromUser?.postalCode && null);
    const [price, setPrice] = useState(eventFromUser?.price && 0);
    const [tags, setTags] = useState(tagService.arrayToString(eventFromUser?.tags));
    const [image, setImage] = useState(null);

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

        const eventValidator = new EventValidator();
        const errors = eventValidator.validate(event);
        if (errors != null){
            alert(errors);
            return;
        }
        const eventsTag = tagService.format(tags);
        if (eventsTag != null){
            event.tags = eventsTag;
        }
        let eventService = new EventService();
        if (eventFromUser ==  null){
            eventService.create(event).then((response) => {
                if (response.id != null){
                    console.log(response)
                    navigation.navigate("UserEvent");
                    return
                }
                alert("L'événement n'a pas été crée :)")
            });
            return;
        }
        event.id = eventFromUser.id;
        eventService.update(event).then(res => {
            navigation.navigate("UserEvent");
        });
    }

    const onLoadImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4, 3],
          quality: 1,
          allowsMultipleSelection: false,
      });
      if (!result.canceled){
          setImage(result.assets[0].uri)
      }
    };

    return (
        <ScrollView style={{...Styles.container, ...{paddingHorizontal: 15, paddingVertical: 10,}}}>
            <Label name="Nom de l'événement:" />
            <CustomInput value={name} onChange={(value) => onChange("name", value)}/>
            <Label name="Adresse:"/>
            <CustomInput value={address} onChange={(value) => onChange("address", value)}/>
            <Label name="Code postal:"/>
            <CustomInput value={postalCode} keyboardType="numeric" onChange={(value) => onChange("postalCode", value)}/>
            <Label name="Email:"/>
            <CustomInput value={email} onChange={(value) => onChange("email", value)}/>
            <Label name="Mots clés:"/>
            <CustomInput value={tags} placeholder={"Ex: Danse, Dessin, etc."} onChange={(value) => setTags(value)}/>
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
            <CustomInput value={price} keyboardType="numeric"  disbale={isFree} onChange={(value) => onChange("price", value)}/>
            <Label name="Date de début:"/>
            <CustomInput value={dateBegin} placeholder={"Ex: 01/12/2023"} onChange={(value) => onChange("dateBegin", value)}/>
            <Label name="Date de fin:" />
            <CustomInput value={dateEnd} placeholder={"Ex: 31/12/2023"} onChange={(value) => onChange("dateEnd", value)}/>
            <TouchableOpacity style={componentStyles.uploadBtn} onPress={onLoadImage}>
                <Text style={componentStyles.uploadBtnText}>Charger une image</Text>
                <MaterialCommunityIcons name="image" size={30} />
            </TouchableOpacity>
            {image && <Image resizeMode={'contain'} height={200} source={{uri: image}} />}
            <Label name="Description" />
            <TextInput
                value={description}
                onChangeText={(value) => onChange("description", value)}
                style={componentStyles.textArea}
                multiline={true}
                numberOfLines={10}
                />
            <TouchableOpacity style={componentStyles.btn} onPress={onSubmit}>
                <Text style={componentStyles.btnText}>{eventFromUser != null ? 'Mettre à jour':'créer'}</Text>
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
    },
    uploadBtn:{
        borderWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent:"space-between",
        paddingVertical: 5,
        alignItems:"center",
        marginVertical: 10,
        borderRadius: 10,
    },
    uploadBtnText: {
        fontSize: 18
    }
})

export default CreateEventScreen;