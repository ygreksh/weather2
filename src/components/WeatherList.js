import React from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
} from 'react-native';
import { WeatherItem} from '../components'

const WeatherList = () => {

    const weatherList = [
        {name: "Weather 1"},
        {name: "Weather 2"},
        {name: "Weather 3"},
    ];

    const renderWeatherItem = ({item}) => <WeatherItem item={item} />
    
    return (
            <View
                style={{
                    // flex: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    alignContent: 'center',
                    borderWidth: 1,
                    borderColor: 'red',
                    flexDirection: 'row',
                    padding: 10,
                }}
            >
                <FlatList 
                    style={{
                        // flex: 1,
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // alignContent: 'stretch',
                        // borderWidth: 1,
                        // borderColor: 'red',
                        // padding: 10,
                    }}
                    data={weatherList}
                    renderItem={renderWeatherItem}
                    horizontal={true}
                />   
                
            </View>
  );
};

export default WeatherList;
