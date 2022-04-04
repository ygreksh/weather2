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
            <View
                style={{
                    // flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // alignContent: 'stretch',
                    borderWidth: 1,
                    borderColor: 'red',
                    flexDirection: 'row',
                    padding: 10,
                }}
            >
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
                    <Text>
                        Weather 1
                    </Text>
                </View>
                <View
                    style={{
                        //  justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: 'pink',
                        padding: 5,
                        margin: 10,
                    }}
                >
                    <Text>
                        Weather 2
                    </Text>
                </View>
                <View
                    style={{
                        //  justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: 'pink',
                        padding: 5,
                        margin: 10,
                    }}
                >
                    <Text>
                        Weather 3
                    </Text>
                </View>
            </View>
            <View
                style={{
                    // flex: 3,
                    //  justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'green'
                }}
            >
                <View
                    style={{
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'yellow',
                        padding: 5,
                        margin: 5,
                    }}
                >
                    <Text>
                        City 1
                    </Text>
                </View>
                <View
                    style={{
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'yellow',
                        padding: 5,
                        margin: 5,
                    }}
                >
                    <Text>
                        City 2
                    </Text>
                </View>
                <View
                    style={{
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'yellow',
                        padding: 5,
                        margin: 5,
                    }}
                >
                    <Text>
                        City 3
                    </Text>
                </View>
            </View>
        </View>
  );
};

export default NavBar;
