import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import EventScreen from "./screens/EventScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilterScreen from "./screens/FilterScreen";
import Home from "./screens/Home";
import EventDetail from "./screens/EventDetail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title: 'Liste des événements', headerShown: false}} />
                <Stack.Screen name="EventDetail" component={EventDetail} options={{title: 'Description'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}