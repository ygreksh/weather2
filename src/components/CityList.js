import React from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const CityList = () => {

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

export default CityList;
