import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen/MapScreen';
import { NAVIGATION_TO_MAP_SCREEN } from './routes';

const Stack = createNativeStackNavigator();

export default function RootStackNavigator():JSX.Element {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={NAVIGATION_TO_MAP_SCREEN} component={MapScreen} />
        </Stack.Navigator>
);
}
