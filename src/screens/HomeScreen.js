import React, {useState, useEffect} from 'react';
import {Text, Button, View, Image, Alert} from 'react-native';
import { CityList, NavBar, WeatherItem, WeatherList } from '../components';
import Geolocation from '@react-native-community/geolocation';
import {useSelectedCityStore, useCurrentWeatherStore, useMyLocationStore} from '../store';

const HomeScreen = () => {
    // const [myLocation, setMyLocation] = useState({latitude: null, longitude: null });
    const myLocation = useMyLocationStore(state => state.myLocation);
    const setMyLocation = useMyLocationStore(state => state.setMyLocation);
    const [myCity, setMyCity] = useState({name: "", country: ""});
    // const [currentWeather, setCurrentWeather] = useState();
    const currentWeather = useCurrentWeatherStore(state => state.currentWeather);
    const setCurrentWeather = useCurrentWeatherStore(state => state.setCurrentWeather);
    const selectedCity = useSelectedCityStore(state => state.selectedCity);
    // const [myLocation, setMyLocation] = useState();
    const APIKey = "d4041d05e889df96025b49745e6711b9";

    useEffect(() => {
        handleGetLocalWeather();
    }, []);

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
            error => {
                        console.log("ERROR", error);
                        Alert.alert("No data, turn on GPS");
                    },
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
        // if(!myLocation) {
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
        // }
        if (currentWeather && myLocation && myLocation.latitude) {
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
