import React from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const WeatherList = () => {

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
            
        </View>
  );
};

export default WeatherList;
