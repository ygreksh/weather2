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
import { Provider } from 'react-redux';
import store from './src/store/redux';


const App = () => {

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
