import React from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
    // const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    // const APIKey = "ed33d2d19e6b6136c9323c2d3130fd21";
    // const lat = 47;
    // const lon = 30;
    // let url = baseUrl + "?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    

    // const handleGetLocation = () => {
    //     console.log(url);
    //     fetch(baseUrl)
    //     .then(response => response.json())
    //     .then(json => {
    //                     console.log(json);
    //                 });
    // }
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
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'baseline',
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: 'blue'
                }}
            >
                <View
                    style={{
                        flex: 10,
                        // justifyContent: 'center',
                        // alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text>
                        Navigation Bar
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Button
                        title='+'
                        onPress={() => {
                            console.log("Click NavBar button +");
                            navigation.navigate("Add City");
                            }
                        } 
                    />
                </View>
            </View>
            
        </View>
  );
};

export default NavBar;
