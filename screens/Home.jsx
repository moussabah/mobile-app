import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Form from "./Form";
import EventDetail from "./EventDetail";
import EventScreen from "./EventScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilterScreen from "./FilterScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function Home({navigation}) {

    return (
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
            <Tab.Screen name="FilterScreen" component={FilterScreen} options={{
                title: 'Filtre', tabBarLabel: "Filtre",
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="tune" color={color} size={size}/>
                ),
            }}/>
        </Tab.Navigator>
  )
}
  