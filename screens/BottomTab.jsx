import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilterScreen from "./FilterScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListEventScreen from "./ListEventScreen";
import { getHeaderTitle } from '@react-navigation/elements';
import EventListHeader from "../components/EventListHeader";
import CardScreen from "./CardScreen";
import MapViewScreen from "./MapViewScreen";
import {View} from "react-native";
import EditionComponent from "../components/EditionComponent";

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
                    title: 'Edition',
                    tabBarLabel: "Evenements",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={size}/>
                    ),
                    header:({ navigation, route, options, back }) => {
                        const title = getHeaderTitle(options, route.name)
                        return <EventListHeader title={title} navigation={navigation} />
                    }

                }
            }/>
            <Tab.Screen name="MapScreen" component={MapViewScreen} options={{
                title: 'Carte des événements', tabBarLabel: "Carte",
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
  