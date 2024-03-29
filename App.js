import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import EventScreen from "./screens/EventScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilterScreen from "./screens/FilterScreen";


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >
                <Tab.Screen name="EventScreen" component={EventScreen} options={
                    {
                        title: 'Liste des événements',
                        tabBarLabel: "Evenements",
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="calendar" color={color} size={size}/>
                        ),
                    }
                }/>
                <Tab.Screen name="EventDetail" component={FilterScreen} options={{
                    title: 'Filtre', tabBarLabel: "Filtre",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size}/>
                    ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}