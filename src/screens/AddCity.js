import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  FlatList
} from 'react-native';

const AddCity = () => {
  const baseUrl = "http://api.openweathermap.org/geo/1.0/direct";
  const APIKey = "d4041d05e889df96025b49745e6711b9";
  const city = "Tiraspol";
  const [searchedCityList, setSearchedCityList] = useState([{name: "no_name", country: "no_country"}]);


  const handleCitySearch = () => {
    let url = baseUrl + "?q=" + city + "&limit=5" + "&appid=" + APIKey;
    console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(json => {
                        console.log(json.map(city => city.name + ", " + city.country));
                        setSearchedCityList(json);
                    });
  }
  const renderSearchedCityList = ({item}) => 
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        padding: 5,
        margin: 5,
      }}
    >
      <Text>
      {item? item.name : ""}, {item? item.country : ""}
      </Text>
    </View>
    
    return (
            <View>
                <Text>
                    Add City Screen
                </Text>
                <View>
                  <TextInput 
                    style={{
                      borderWidth: 1,
                    }}
                  />
                  <Button 
                    title='Search'
                    onPress={handleCitySearch}
                  />
                </View>
                <View>
                  <FlatList 
                    data={searchedCityList}
                    renderItem={renderSearchedCityList}
                  />
                </View>
            </View>
  );
};

export default AddCity;
