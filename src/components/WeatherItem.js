import React, {useState, useEffect} from 'react';
import {Text, Button, View, Image, Alert} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import {useSelectedCityStore, useCurrentWeatherStore} from '../store/zustand';


const WeatherItem = () => {
  const currentWeather = useCurrentWeatherStore(state => state.currentWeather);
  console.log("WeatherItem currentWeather", JSON.stringify(currentWeather));

  useEffect(() => {
    console.log("WeatherItem useEffect currentWeather", JSON.stringify(currentWeather));
  },[]);
  
  return (
    currentWeather && currentWeather.weather ? 
    <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'space-between',
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#dddddd',
                backgroundColor: '#dddddd',
                padding: 5,
                margin: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 30
                }}
            >
                {currentWeather.name}
            </Text>
            <Image 
                style={{
                    backgroundColor: '#dddddd',
                    width: 160,
                    height: 160,
                }}
                source={{
                    uri: "http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@4x.png"
                }}
            />
            {/* <Text>
                Icon: {currentWeather.weather[0].icon}
            </Text> */}
            <Text>
                Main: {currentWeather.weather[0].main}
            </Text>
            <Text>
                Decsr.: {currentWeather.weather[0].description}
            </Text>
            <Text>
                Temp: {Math.round(currentWeather.main.temp-273)}
            </Text>
            <Text>
                Wind: deg={currentWeather.wind.deg}, speed={currentWeather.wind.speed}
            </Text>
        </View> : <Text> Loading... </Text>
    );
};
export default WeatherItem