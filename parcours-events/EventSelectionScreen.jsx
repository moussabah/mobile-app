import React, {useState} from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const EventSelectionScreen = ({ availableEvents, courses, onAddEventToCourse }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleAddEvent = (eventId) => {
        onAddEventToCourse(selectedCourse, eventId);
    };

    return (
        <View>
            <Text>Sélectionner un parcours :</Text>
            <View>
                <Text>Liste des parcours :</Text>
                {courses.map((course) => (
                    <View key={course.id}>
                        <Text>{course.name}</Text>
                        <Button
                            title="Sélectionner"
                            onPress={() => setSelectedCourse(course.id)}
                        />
                    </View>
                ))}
            </View>

            <Text>Ajouter des événements :</Text>
            <FlatList
                data={availableEvents}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Button title="Ajouter au parcours" onPress={() => handleAddEvent(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default EventSelectionScreen;