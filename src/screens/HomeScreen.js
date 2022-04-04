import React from 'react';
// import {}
import {
  Text,
  Button,
  View
} from 'react-native';
import CityList from '../components/CityList';
import NavBar from '../components/NavBar';
import WeatherList from '../components/WeatherList';
import Geolocation from '@react-native-community/geolocation';


const HomeScreen = ({navigation}) => {
    // const navigation = useNavigation();
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const APIKey = "d4041d05e889df96025b49745e6711b9";
    const lat = 47;
    const lon = 30;
    let url = baseUrl + "?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    

    const handleGetWeather = () => {
        console.log(url);
        fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
                        console.log(json);
                    });
    }

    const handleGetLocation = () => {
        const config = {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 3600000,
          };
        Geolocation.getCurrentPosition(
            info => console.log("INFO", info),
            error => console.log("ERROR", error),
            config
            );
    }

    return (
            <View>
                <Text>
                    Home Screen
                </Text>
                <NavBar />
                <WeatherList />    
                <CityList />
                <Button
                    title='Get weather'
                    onPress={handleGetWeather} 
                />
                <Button
                    title='Get Location'
                    onPress={handleGetLocation} 
                />
            </View>
  );
};

export default HomeScreen;
