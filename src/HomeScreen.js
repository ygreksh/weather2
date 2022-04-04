import React from 'react';
// import {}
import {
  Text,
  Button,
  View
} from 'react-native';
import NavBar from './components/NavBar';

const HomeScreen = ({navigation}) => {
    // const navigation = useNavigation();
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const APIKey = "ed33d2d19e6b6136c9323c2d3130fd21";
    const lat = 47;
    const lon = 30;
    let url = baseUrl + "?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    

    const handleGetLocation = () => {
        console.log(url);
        fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
                        console.log(json);
                    });
    }
    return (
            <View>
                <Text>
                    Home Screen
                </Text>
                <NavBar />
                <Button
                    title='Get Location'
                    onPress={handleGetLocation} 
                />
            </View>
  );
};

export default HomeScreen;
