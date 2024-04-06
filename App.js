import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import EventScreen from "./screens/MenuScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilterScreen from "./screens/FilterScreen";
import BottomTab from "./screens/BottomTab";
import EventDetail from "./screens/EventDetail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MenuScreen from "./screens/MenuScreen";
import UserEventScreen from "./screens/UserEventScreen";
import CardScreen from "./screens/CardScreen";
import CreateEventScreen from "./screens/CreateEventScreen";
import CreateCourseScreen from "./screens/CreateCourseScreen";
import ListCourseScreen from "./screens/ListCourseScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MenuScreen} options={{title: 'Menu'}} />
                <Stack.Screen name="EventList" component={BottomTab} options={{title: 'Menu', headerShown: false}} />
                <Stack.Screen name="UserEvent" component={UserEventScreen} options={{title: 'Mes événements'}} />
                <Stack.Screen name="CardScreen" component={CardScreen} options={{title: 'Carte'}} />
                <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} options={{title: 'Créer un événement'}} />
                <Stack.Screen name="CreateCourseScreen" component={CreateCourseScreen} options={{title: 'Créer un parcours'}} />
                <Stack.Screen name="CourseList" component={ListCourseScreen} options={{title: 'Parcours disponibles'}} />
                <Stack.Screen name="EventDetail" component={EventDetail} options={{title: 'Description'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}