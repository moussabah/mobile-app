import React, {useEffect, useMemo, useState,} from 'react';
import {Picker} from "@react-native-picker/picker";
import {View, StyleSheet} from "react-native";
import FakerService from "../services/FakerService";
import PartyService from "../services/PartyService";
import Party from "../models/Party";

function EditionComponent(props) {
    const {onPick, style} = props;
    const fakerService = new FakerService();
    const [value, setValue] = useState(null);
    const [partys, setPartys] = useState(null);
    const partyService = new PartyService();
    const [editions, setEditions] = useState([]);

    useEffect(() => {
        partyService.getAll()
            .then(response => response.json())
            .then(res => {
                console.log({res})
                setEditions((new Party()).toArray(res))
            })
            .catch((error) => {
                console.error('Error fetching partys:', error);
            })
    }, []);

    const onSelect = (value) => {
        onPick(value)
        setValue(value)
    }

    return (
        <View style={{...styles.pickerContainer, ...style}}>
            <Picker
                style={styles.picker}
                selectedValue={value}
                onValueChange={value => onSelect(value)}
            >
                {
                    editions.map(edition => {
                        return <Picker.Item style={styles.pickerItem} key={edition.id} label={edition.label} value={edition} />
                    })
                }
            </Picker>
        </View>
    );
}


const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 1,
        marginTop: 8,
        backgroundColor: "#FFF",
        borderRadius: 8,
        paddingHorizontal: 5,
        borderColor: "#a8a8a8",
        justifyContent:'center'
    },
    piker:{
        borderWidth:1,
    },
    pickerItem:{
        fontSize: 18,
    },
})
export default EditionComponent;