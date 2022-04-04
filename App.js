import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import StackNavigator from './src/navigation/StackNavigator';


const App = () => {

  return (
    <StackNavigator />
  );
};

export default App;
