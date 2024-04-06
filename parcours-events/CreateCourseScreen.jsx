import React, {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

const CreateCourseScreen = ({ onCreateCourse }) => {
    const [courseName, setCourseName] = useState('');

    const handleCreateCourse = () => {
        onCreateCourse(courseName);
        setCourseName('');
    };

    return (
        <View>
            <Text>Nom du parcours :</Text>
            <TextInput
                //placeholder="Nom du parcours"
                value={courseName}
                onChangeText={setCourseName}
            />
            <Button title="Créer le parcours" onPress={handleCreateCourse} />
        </View>
    );
};

export default CreateCourseScreen;