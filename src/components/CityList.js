import React, { useEffect } from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useMyCityListStore, useSelectedCityStore, useCurrentWeatherStore } from "../store";
// import { useNavigation } from '@react-navigation/native';



const CityList = () => {
    const APIKey = "d4041d05e889df96025b49745e6711b9";

    // const cityList = [
    //                     {name: "City 1", country: "C1"},
    //                     {name: "City 2", country: "C2"},
    //                     {name: "City 3", country: "C3"},
    //                 ];
    const myCityList = useMyCityListStore(state => state.myCityList);
    const setMyCityList = useMyCityListStore(state => state.setMyCityList);
    const addCity = useMyCityListStore(state => state.addCity);
    const subCity = useMyCityListStore(state => state.subCity);
    const selectedCity = useSelectedCityStore(state => state.selectedCity);
    const setSelectedCity = useSelectedCityStore(state => state.setSelectedCity);
    const currentWeather = useCurrentWeatherStore(state => state.currentWeather);
    const setCurrentWeather = useCurrentWeatherStore(state => state.setCurrentWeather);

    if(myCityList.length > 0) {
        // console.log("myCityList:", myCityList.map(item => item.name + ", " + item.country));
    } else {
        console.log("myCityList is empty");
    }

    useEffect(() => {
        // console.log("myCityList useEffect now:", myCityList.map(item => item.name + ", " + item.country));
    });
    const handleSelectCity = (item) => {
        console.log("Weather for city:", item.name);
        console.log(JSON.stringify(item));
        setSelectedCity(item);
        // console.log("Now selected city:", selectedCity.name);
        getWeather(item);
    };

    const handleDeleteCity = (city) => {
        subCity(city);
    }

    const getWeather = (city) => {
        const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
        if(city) {
            let url = baseUrl + "?q=" + city.name + "&appid=" + APIKey;
            console.log(url);
            fetch(url)
            .then(response => response.json())
            .then(json => {
                            console.log(json);
                            setCurrentWeather(json);
                        })
            // .catch(error => console.log("Get weather fetch error", error));
        }
        
    }

    const renderCityItem = ({item}) => 
        <View
            style={{
                flexDirection: 'row'
            }}
        >
        <TouchableOpacity
            onPress={() => handleSelectCity(item)}
        >
            <View
                style={{
                    // flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'red',
                    padding: 5,
                    margin: 5,
                }}
            >
                <Text>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
        <Button 
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
