import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'

export default function Form() {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');


  return (
    <View styles={{borderWidth: 1, padding: 10,}}>
      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.header} >Formulaire</Text>
      </View>
      <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder='Nom'
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Prenom"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Votre âge"
            keyboardType="numeric"
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  header:{
  fontSize: 25,
  }
});