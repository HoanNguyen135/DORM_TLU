import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen,RegisterInDorm} from '../Screen'
const Stack = createNativeStackNavigator();


function AuthStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
    >
      <Stack.Screen name="LoginScreen" component={ LoginScreen } />
      <Stack.Screen name="RegisterInDorm" component={RegisterInDorm} />
    </Stack.Navigator>
  );
}

export default AuthStackScreen;