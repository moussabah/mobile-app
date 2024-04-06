import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Form from './screens/Form';
import { NavigationContainer } from '@react-navigation/native';
import EventScreen from "./screens/EventScreen";
import EventDetail from "./screens/EventDetail";
import CourseManagementScreen from "./parcours-events/CourseManagementScreen";
import CreateCourseScreen from "./parcours-events/CreateCourseScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="EventScreen" component={EventScreen} options={{title: 'Liste des evenements'}} />
          <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="EventDetail" component={EventDetail} options={{title: 'Description'}} />
        <Stack.Screen name="CouseManagementScreen" component={CouseManagementScreen}
                        Options={{title: 'CouseManagementScreen'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}