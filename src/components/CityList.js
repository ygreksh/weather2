import React from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const CityList = () => {
    const cityList = [
                        {name: "City 1", country: "C1"},
                        {name: "City 2", country: "C2"},
                        {name: "City 3", country: "C3"},
                    ];
    const renderCityItem = ({item}) => 
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
                        data={cityList}
                        renderItem={renderCityItem}
                      />  
                    </View>
                </View>        
  );
};

export default CityList;
