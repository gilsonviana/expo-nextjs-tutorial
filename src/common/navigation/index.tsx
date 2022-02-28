import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../modules/Home/HomeScreen';
import { SuccessScreen } from '../../modules/Home/SuccessScreen';
 
type MainStackRoutes = {
  Main: undefined;
  Success: undefined;
};
 
const MainStack = createNativeStackNavigator<MainStackRoutes>();
 
const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <MainStack.Screen name="Main" component={HomeScreen} />
      <MainStack.Screen name="Success" component={SuccessScreen} />
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
