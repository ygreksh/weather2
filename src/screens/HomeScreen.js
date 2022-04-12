import React, {useState, useEffect, useCallback, useLayoutEffect } from 'react';
import {Text, Button, View, Image, Alert} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CityList, WeatherItem, WeatherList } from '../components';
import Geolocation from '@react-native-community/geolocation';
import {useSelectedCityStore, useCurrentWeatherStore, useMyLocationStore, useMyCityStore, useMyCityListStore} from '../store/zustand';
import { apiService } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { getMyLocation, selectCurrentWeather, selectMyLocation, getGPSWeather, selectMyCity } from '../store/redux/weatherSlice';

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const myLocation = useSelector(selectMyLocation);
    const myCity = useSelector(selectMyCity);
    // const currentWeather = useSelector(selectCurrentWeather);
    const loading = useSelector(state => state.weather.loading);

    const isFocused = useIsFocused();
    
    // const [myLocation, setMyLocation] = useState();
    // const myLocation = useMyLocationStore(state => state.myLocation);
    // const setMyLocation = useMyLocationStore(state => state.setMyLocation);
    // const myCity = useMyCityStore(state => state.myCity);
    // const setMyCity = useMyCityStore(state => state.setMyCity);
    const myCityList = useMyCityListStore(state => state.myCityList);
    // const [currentWeather, setCurrentWeather] = useState();
    // const currentWeather = useCurrentWeatherStore(state => state.currentWeather);
    // const setCurrentWeather = useCurrentWeatherStore(state => state.setCurrentWeather);
    const selectedCity = useSelectedCityStore(state => state.selectedCity);

    useEffect(() => {
        dispatch(getMyLocation());
        console.log("First load: getMyLocation", myLocation);
        // getLocation();
        // getGPSWeather(myLocation);
        // console.log("First load: myLocation", JSON.stringify(myLocation));
        // console.log("First load: myCity", myCity);
    }, []);

useEffect(() => {
        console.log("useEffect isFocused");
    }, [isFocused]);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.navigate("Add City")} title="Add" />
          ),
        });
      }, [navigation]);

    
    useEffect(() => {
        // getGPSWeather(myLocation);
        dispatch(getGPSWeather(myLocation));
        // console.log("First load: myLocation", JSON.stringify(myLocation));
        // console.log("First load: myCity", myCity);
    }, [myLocation]);

    // const getLocation = useCallback(() => {
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
    //         error => {
    //                     console.log("ERROR", error);
    //                     Alert.alert("No data, turn on GPS");
    //                 },
    //         config
    //         );
    // });

    // const getGPSWeather = useCallback(async (location) => {
    //     try {
    //         if (location) {
    //             const response = await apiService.weatherGPS(location);
    //             if (!response.data.error) {
    //                 // console.log("Axios response", JSON.stringify(response.data));
    //                 // setCurrentWeather(response.data);
    //                 console.log("HomeScreen getGPSWeather city name:", response.data.name);
    //                 setMyCity({name: response.data.name, country: response.data.sys.country});
    //             } else {
    
    //             }
    //         }            
    //     } catch (error) {
    //         console.log("Homescreen Axios getGPSWeather ERROR", error);
    //     }

        
    // });

    // const getCityWeather = async (city) => {
    //     try {
    //         const response = await apiService.weatherCity({city});
    //         if (!response.data.error) {
    //             // console.log("Axios response", JSON.stringify(response.data));
    //             setCurrentWeather(response.data);
    //         } else {
    //         }    
    //     } catch (error) {
    //         console.log("Axios getCityWeather ERROR");
    //     }
        
    // }

    const handleGetLocalWeather = () => {
        // getGPSWeather(myLocation);
        dispatch(getMyLocation());
    }

    return (
            <View>
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
                <Button
                    title='Get Local Weather'
                    onPress={handleGetLocalWeather} 
                />
                {/* <Button
                    title='Get Tiraspol weather'
                    onPress={() => getCityWeather("tiraspol")} 
                /> */}
                {myCity ? 
                <Text>
                My city: {myCity.name}, {myCity.country}.
                </Text> : <Text> no_data </Text>
                }
                
            </View>
  );
};

export default HomeScreen;
