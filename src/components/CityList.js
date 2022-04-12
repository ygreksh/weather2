import React, { useEffect } from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useMyCityListStore, useSelectedCityStore, useCurrentWeatherStore } from "../store/zustand";
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, selectCurrentWeather, selectMyCity, setCurrentWeather, setSelectedCity } from '../store/redux/weatherSlice';
import { APIKey } from '../config';
// import { useNavigation } from '@react-navigation/native';



const CityList = () => {

    const myCityList = useMyCityListStore(state => state.myCityList);
    // const setMyCityList = useMyCityListStore(state => state.setMyCityList);
    // const addCity = useMyCityListStore(state => state.addCity);
    const subCity = useMyCityListStore(state => state.subCity);
    const selectedCity = useSelectedCityStore(state => state.selectedCity);
    // const setSelectedCity = useSelectedCityStore(state => state.setSelectedCity);
    // const currentWeather = useCurrentWeatherStore(state => state.currentWeather);
    // const setCurrentWeather = useCurrentWeatherStore(state => state.setCurrentWeather);
    const dispatch = useDispatch();
    const currentWeather = useSelector(selectCurrentWeather);


    // if(myCityList.length > 0) {
    //     console.log("myCityList:", myCityList.map(item => item.name + ", " + item.country));
    // } else {
    //     console.log("myCityList is empty");
    // }
 
    useEffect(() => {
        console.log("selectedCity changed");
    }, [selectedCity]);

    const handleSelectCity = (item) => {
        console.log("Weather for city:", item.name);
        console.log(JSON.stringify(item));
        // setSelectedCity(item);
        // console.log("Now selected city:", selectedCity.name);
        // getWeather(item);
        dispatch(setSelectedCity(item));
        dispatch(getCityWeather(item.name));
    };

    const handleDeleteCity = (city) => {
        subCity(city);
    }

    // const getWeather = (city) => {
    //     const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    //     if(city) {
    //         let url = baseUrl + "?q=" + city.name + "&appid=" + APIKey;
    //         console.log(url);
    //         fetch(url)
    //         .then(response => response.json())
    //         .then(json => {
    //                         // console.log(json);
    //                         // setCurrentWeather(json);
    //                         dispatch(setCurrentWeather(json));
    //                     })
    //         // .catch(error => console.log("Get weather fetch error", error));
    //     }
        
    // }

    const renderCityItem = ({item}) => 
        <View
            style={{
                // flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignContent: 'space-between',
                alignItems: 'baseline',
                // padding: 10,
                margin: 5,
            }}
        >
        <TouchableOpacity
            style={{
                // flex: 1
            }}
            onPress={() => handleSelectCity(item)}
        >
            <View
                style={{
                    // flex: 3,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'red',
                    backgroundColor: '#c0c0c0',
                    padding: 10,
                    margin: 5,
                }}
            >
                <Text>
                    {item.name}, {item.country}
                </Text>
            </View>
        </TouchableOpacity>
        <Button 
            style={{
                flex: 1,
                padding: 10,
                margin: 5,
            }}
            title='-'
            onPress={() => handleDeleteCity(item)}
        />
        </View>
        
    
    return (
                <View
                    style={{
                        // flex: 1,
                        // justifyContent: 'center',
                        // alignContent: 'center',
                        // alignItems: 'baseline',
                        // borderWidth: 1,
                        // borderColor: 'blue'
                    }}
                >
                    <View
                        style={{
                            // flex: 1,
                            // justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 4,
                            borderColor: 'green'
                        }}
                    >
                      <FlatList 
                        data={myCityList}
                        renderItem={renderCityItem}
                      />  
                    </View>
                </View>        
  );
};

export default CityList;
