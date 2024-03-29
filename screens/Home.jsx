import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Form from "./Form";
import EventDetail from "./EventDetail";
import EventScreen from "./EventScreen";

const Stack = createNativeStackNavigator();
export default function Home({navigation}) {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="EventScreen" component={EventScreen} options={{title: 'Liste des événements'}} />
                <Stack.Screen name="EventDetail" component={EventDetail} options={{title: 'Description'}} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}
  