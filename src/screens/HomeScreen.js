import React, {useState, useEffect, useCallback, useLayoutEffect } from 'react';
import {Text, Button, View, Image, Alert} from 'react-native';
import { CityList, WeatherItem, WeatherList } from '../components';
import Geolocation from '@react-native-community/geolocation';
import {useSelectedCityStore, useCurrentWeatherStore, useMyLocationStore, useMyCityStore, useMyCityListStore} from '../store';

const HomeScreen = ({navigation}) => {
    // const [myLocation, setMyLocation] = useState();
    const myLocation = useMyLocationStore(state => state.myLocation);
    const setMyLocation = useMyLocationStore(state => state.setMyLocation);
    const myCity = useMyCityStore(state => state.myCity);
    const setMyCity = useMyCityStore(state => state.setMyCity);
    const myCityList = useMyCityListStore(state => state.myCityList);
    // const [currentWeather, setCurrentWeather] = useState();
    const currentWeather = useCurrentWeatherStore(state => state.currentWeather);
    const setCurrentWeather = useCurrentWeatherStore(state => state.setCurrentWeather);
    const selectedCity = useSelectedCityStore(state => state.selectedCity);
    const APIKey = "d4041d05e889df96025b49745e6711b9";

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.navigate("Add City")} title="Add" />
          ),
        });
      }, [navigation]);

    useEffect(() => {
        getLocation();
        // getGPSWeather(myLocation);
        // console.log("First load: myLocation", JSON.stringify(myLocation));
        // console.log("First load: myCity", myCity);
    }, []);

    useEffect(() => {
        getGPSWeather(myLocation);
        // console.log("First load: myLocation", JSON.stringify(myLocation));
        // console.log("First load: myCity", myCity);
    }, [myLocation]);

    const getLocation = useCallback(() => {
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
    });

    const getGPSWeather = useCallback((location) => {
        if (location) {
            const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
            let url = baseUrl + "?lat=" + location.latitude + "&lon=" + location.longitude + "&appid=" + APIKey;
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(json => {
                                console.log(json);
                                setCurrentWeather(json);
                                setMyCity({name: json.name})
                            });
        }
        
    });

    const getCityWeather = (city) => {
        const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
                    let url = baseUrl + "?q=" + city + "&appid=" + APIKey;
                    console.log(url);
                    fetch(url)
                    .then(response => response.json())
                    .then(json => {
                                    console.log(json);
                                    setCurrentWeather(json);
                                    // setMyCity({name: json.name})
                                });
    }

    // useEffect(() => {
    //     function getGPSLocation() {
    //         const config = {
    //             enableHighAccuracy: true,
    //             timeout: 2000,
    //             maximumAge: 3600000,
    //           };
    //         Geolocation.getCurrentPosition(
    //             info => {
    //                 console.log("INFO", info);
    //                 setMyLocation(info.coords);
    //             },
    //             error => {
    //                         console.log("ERROR", error);
    //                         Alert.alert("No data, turn on GPS");
    //                     },
    //             config
    //             );
    //     };

    //     getGPSLocation();
        

    //     const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    //     if(myLocation) {
    //         let url = baseUrl + "?lat=" + myLocation.latitude + "&lon=" + myLocation.longitude + "&appid=" + APIKey;
    //         console.log(url);
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(json => {
    //                             console.log(json);
    //                             setCurrentWeather(json);
    //                             setMyCity({name: json.name})
    //                         });
    //     }
            
    // }, []);
    

    const handleGetLocalWeather = () => {
        getGPSWeather(myLocation);
        
    }

    return (
            <View>
                {/* <Text>
                    Home Screen
                </Text> */}
                {/* <NavBar /> */}
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
                {myCity ? 
                <Text>
                My city: {myCity.name}, {myCity.country}.
                </Text> : <Text> no_data </Text>
                }
                
            </View>
  );
};

export default HomeScreen;
