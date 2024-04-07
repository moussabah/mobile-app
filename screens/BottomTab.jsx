import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilterScreen from "./FilterScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListEventScreen from "./ListEventScreen";

const Tab = createBottomTabNavigator();
export default function BottomTab({navigation}) {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen name="EventScreen" component={ListEventScreen} options={
                {
                    title: 'Liste des événements',
                    tabBarLabel: "Evenements",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={size}/>

                    ),

                }
            }/>
            <Tab.Screen name="MapScreen" component={FilterScreen} options={{
                title: 'Filtre', tabBarLabel: "Carte",
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="map" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen name="FilterScreen" component={FilterScreen} options={{
                title: 'Filtre', tabBarLabel: "Filtre",
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="tune" color={color} size={size}/>
                ),
            }}/>
        </Tab.Navigator>
  )
}
  