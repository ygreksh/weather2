import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from "../screens/HomeScreen";
// import AddCity from "../screens/AddCity";
import { HomeScreen, AddCity } from "../screens";


const Stack = createNativeStackNavigator();



export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Add City" component={AddCity} />
        </Stack.Navigator>
    </NavigationContainer>
  ) 
}
