import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import EventScreen from "./screens/MenuScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilterScreen from "./screens/FilterScreen";
import BottomTab from "./screens/BottomTab";
import EventDetail from "./screens/EventDetail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MenuScreen from "./screens/MenuScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MenuScreen} options={{title: 'Menu'}} />
                <Stack.Screen name="EventList" component={BottomTab} options={{title: 'Menu', headerShown: false}} />
                <Stack.Screen name="EventDetail" component={EventDetail} options={{title: 'Description'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}