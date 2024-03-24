import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Form from './screens/Form';
import { NavigationContainer } from '@react-navigation/native';
import EventScreen from "./screens/EventScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Acceuil'}} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="EventScreen" component={EventScreen} options={{title: 'Liste des événements'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}