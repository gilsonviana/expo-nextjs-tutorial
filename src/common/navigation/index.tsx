import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../modules/Home/HomeScreen';
 
type MainStackRoutes = {
  Main: undefined;
};
 
const MainStack = createNativeStackNavigator<MainStackRoutes>();
 
const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <MainStack.Screen name="Main" component={HomeScreen} />
    </MainStack.Navigator>
  );
};
 
export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
