import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CreateCourseScreen from './CreateCourseScreen';
import EventSelectionScreen from './EventSelectionScreen';

const CourseManagementScreen = () => {
    const [courses, setCourses] = useState([]);
    const availableEvents = []; // Mettez vos événements disponibles ici

    const handleCreateCourse = (courseName) => {
        const newCourse = {
            id: courses.length + 1,
            name: courseName,
            events: [],
        };
        setCourses([...courses, newCourse]);
    };

    const handleAddEventToCourse = (courseId, eventId) => {
        const updatedCourses = courses.map((course) =>
            course.id === courseId ? { ...course, events: [...course.events, eventId] } : course
        );
        setCourses(updatedCourses);
    };

    return (
        <View>
            <CreateCourseScreen onCreateCourse={handleCreateCourse} />
            <EventSelectionScreen
                availableEvents={availableEvents}
                onAddEventToCourse={handleAddEventToCourse}
            />
            <Text>Liste des parcours :</Text>
            <FlatList
                data={courses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>Événements :</Text>
                        <FlatList
                            data={item.events.map((eventId) =>
                                availableEvents.find((event) => event.id === eventId)
                            )}
                            keyExtractor={(event) => event.id.toString()}
                            renderItem={({ item }) => <Text>{item.name}</Text>}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default CourseManagementScreen;