import React,{useState} from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import MyTabs from ".";
import { ListRegisterDormScreen } from "../Screen";
import AuthStackScreen from "./AuthNavigation";

const TabStack = createNativeStackNavigator();

const TabStackScreen = () => {

  const [user, setUser] = useState([1]);

  return (
    user ? (<TabStack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontSize: 30,
        },
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
      }}
    >
      <TabStack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
      <TabStack.Screen name="ListRegisterDorm" component={ListRegisterDormScreen} options={{title: 'Danh sách đơn nội trú'}}/>
    </TabStack.Navigator>
  ): (
    <AuthStackScreen/>
  )
  );
};

export default TabStackScreen;
