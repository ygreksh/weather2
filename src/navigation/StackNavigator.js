import React from "react";
import {Text, Button, View, Image, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from "../screens/HomeScreen";
// import AddCity from "../screens/AddCity";
import { HomeScreen, AddCity } from "../screens";


const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Text>
      My Home Screen
    </Text>
    // <Image
    //   style={{ width: 50, height: 50 }}
    //   source={require('@expo/snack-static/react-native-logo.png')}
    // />
  );
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={({ navigation, route }) => ({
                headerTitle: props => <LogoTitle {...props} />,
              })}
            />
            <Stack.Screen name="Add City" component={AddCity} />
        </Stack.Navigator>
    </NavigationContainer>
  ) 
}
