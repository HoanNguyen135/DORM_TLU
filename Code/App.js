import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { InputText } from "./component";
import {
  DrawerContent,
  FilterScreen,
  AreaScreen
} from "./Screen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from "./Navigation/HomeNavigation";
import TabStackScreen from "./Navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./Navigation";
import { RootSiblingParent } from 'react-native-root-siblings';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <RootSiblingParent>
    <NavigationContainer>
      <Drawer.Navigator
          screenOptions={{
            headerShown : false
          }} 
          drawerContent={props => <DrawerContent {...props} />}
          >
              <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
          </Drawer.Navigator>
          <StatusBar style="auto" />
    </NavigationContainer>
    </RootSiblingParent>
    //<FilterScreen/>
  );
}