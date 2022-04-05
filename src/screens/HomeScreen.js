import React, { useState, useEffect } from 'react';
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


const HomeScreen = () => {
    const [myLocation, setMyLocation] = useState({latitude: null, longitude: null });
    const [myCity, setMyCity] = useState({name: "", country: ""});
    // const [myLocation, setMyLocation] = useState();
    const APIKey = "d4041d05e889df96025b49745e6711b9";

    useEffect(() => {
        const config = {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 3600000,
          };
        Geolocation.getCurrentPosition(
            info => {
                console.log("INFO", info);
                setMyLocation(info.coords);
            },
            error => console.log("ERROR", error),
            config
            );
    }, []);
    // const [myLocation, setMyLocation] = useState({lat: null, lon: null, });
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    // const lat = 50;
    // const lon = 30;
    const city = "Tiraspol";
    let url = baseUrl + "?q=" + city + "&appid=" + APIKey;
    

    const handleGetWeather = () => {
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(json => {
                        console.log(json);
                    });
    }

    const handleGetLocation = () => {
        const baseUrl = "http://api.openweathermap.org/geo/1.0/reverse";
        // const lat = 50;
        // const lon = 30;
        const city = "Tiraspol";
        let url = baseUrl + "?lat=" + myLocation.latitude + "&lon=" + myLocation.longitude + "&appid=" + APIKey;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(json => {
                        console.log(json);
                        // console.log("item [0]", json[0].name);
                        setMyCity(json[0]);
                    });
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
                <Text>
                    My location (lat={myLocation.latitude}, lon={myLocation.longitude})
                </Text>
                <Text>
                    My city: {myCity.name}, {myCity.country}.
                </Text>
            </View>
  );
};

export default HomeScreen;
