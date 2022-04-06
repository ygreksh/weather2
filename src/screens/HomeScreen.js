import React, { useState, useEffect } from 'react';
// import {}
import {
  Text,
  Button,
  View,
  Image,
} from 'react-native';
import CityList from '../components/CityList';
import NavBar from '../components/NavBar';
import WeatherList from '../components/WeatherList';
import Geolocation from '@react-native-community/geolocation';
import { useSelectedCityStore, useCurrentWeatherStore } from '../store';


const WeatherItem = ({item}) => {
    const currentWeather = useCurrentWeatherStore(state => state.currentWeather);
    const selectedCity = useSelectedCityStore(state => state.selectedCity);
    return (
        currentWeather ?
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'space-between',
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'pink',
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
                    backgroundColor: 'pink',
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

const HomeScreen = () => {
    const [myLocation, setMyLocation] = useState({latitude: null, longitude: null });
    const [myCity, setMyCity] = useState({name: "", country: ""});
    // const [currentWeather, setCurrentWeather] = useState();
    const currentWeather = useCurrentWeatherStore(state => currentWeather);
    const setCurrentWeather = useCurrentWeatherStore(state => state.setCurrentWeather);
    const selectedCity = useSelectedCityStore(state => state.selectedCity);
    // const [myLocation, setMyLocation] = useState();
    const APIKey = "d4041d05e889df96025b49745e6711b9";

    useEffect(() => {
        
    }, [currentWeather]);

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
    // const lat = 50;
    // const lon = 30;
    // const city = "Tiraspol";
    

    // const handleGetWeather = () => {
    //     const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    //     if(selectedCity) {
    //         let url = baseUrl + "?q=" + selectedCity.name + "&appid=" + APIKey;
    //         console.log(url);
    //         fetch(url)
    //         .then(response => response.json())
    //         .then(json => {
    //                         console.log(json);
    //                         setCurrentWeather(json);
    //                     });
    //     }
        
    // }

    const handleGetLocalWeather = () => {
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

        const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
        if(selectedCity) {
                let url = baseUrl + "?lat=" + myLocation.latitude + "&lon=" + myLocation.longitude + "&appid=" + APIKey;
                console.log(url);
                fetch(url)
                .then(response => response.json())
                .then(json => {
                                console.log(json);
                                setCurrentWeather(json);
                                setMyCity({name: json.name})
                            });
            }
    }

    // const handleGetLocation = () => {
    //     const config = {
    //         enableHighAccuracy: true,
    //         timeout: 2000,
    //         maximumAge: 3600000,
    //       };
    //     Geolocation.getCurrentPosition(
    //         info => {
    //             console.log("INFO", info);
    //             setMyLocation(info.coords);
    //         },
    //         error => console.log("ERROR", error),
    //         config
    //         );

    //     if(myLocation.coords) {
    //         const baseUrl = "http://api.openweathermap.org/geo/1.0/reverse";
    //         const city = "Tiraspol";
    //         let url = baseUrl + "?lat=" + myLocation.latitude + "&lon=" + myLocation.longitude + "&appid=" + APIKey;
    //         console.log(url);
    //         fetch(url)
    //         .then(response => response.json())
    //         .then(json => {
    //                         console.log(json);
    //                         if(json[0]) {
    //                             console.log(`${json[0].name}, ${json[0].country}`);
    //                             setMyCity(json[0]);
    //                         }
    //                         // setMyCity(json[0]);
    //                     })
    //         .catch(error => {
    //             console.log("ERROR Get my location",error);
    //             setMyCity({name: null, country: null});
    //         });
    //     }
        
    // }

    return (
            <View>
                <Text>
                    Home Screen
                </Text>
                <NavBar />
                {/* <WeatherList /> */}
                <View
                    style={{
                        // flex: 1,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        alignContent: 'center',
                        borderWidth: 1,
                        borderColor: 'red',
                        flexDirection: 'row',
                        padding: 10,
                    }}
                >
                    <WeatherItem item={selectedCity}/>
                </View>    
                <CityList />
                {/* <Button
                    title='Get weather'
                    onPress={handleGetWeather} 
                />
                <Button
                    title='Get Location'
                    onPress={handleGetLocation} 
                /> */}
                <Button
                    title='Get Local Weather'
                    onPress={handleGetLocalWeather} 
                />
                {/* <Text
                    style={{fontWeight: 'bold'}}
                >
                    In {myCity.name}, {myCity.country}
                </Text>
                <Text
                    style={{color: 'green'}}
                >
                    Weather {JSON.stringify(currentWeather)}
                </Text>
                <Text>
                    My location (lat={myLocation.latitude}, lon={myLocation.longitude})
                </Text> */}
                <Text>
                    My city: {myCity.name}, {myCity.country}.
                </Text>
            </View>
  );
};

export default HomeScreen;
