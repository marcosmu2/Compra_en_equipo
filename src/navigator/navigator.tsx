import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { WeNeedScreen } from '../screens/WeNeedScreen';
import { PlaceScreen } from '../screens/PlaceScreen';
import { ListScreen } from '../screens/ListScreen';
import { TipoCosas } from '../shared/types';
import { CompletedScreen } from '../screens/CompletedScreen';

export type RootStackParams = {
  HomeScreen : undefined;
  WeNeedScreen : undefined;
  PlaceScreen : undefined;
  CompletedScreen : undefined;
  ListScreen : TipoCosas; 
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WeNeedScreen" component={WeNeedScreen} />
      <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="CompletedScreen" component={CompletedScreen} />
    </Stack.Navigator>
  );
}