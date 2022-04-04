import React, { useState, useEffect } from 'react';
// import {}
import {
  Text,
  Button,
  View
} from 'react-native';
import CityList from '../components/CityList';
import NavBar from '../components/NavBar';
import WeatherList from '../components/WeatherList';
import Geolocation from '@react-native-community/geolocation';


const HomeScreen = () => {
    const [myLocation, setMyLocation] = useState({lat: null, lon: null });

    useEffect(() => {
        const config = {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 3600000,
          };
        Geolocation.getCurrentPosition(
            info => {
                console.log("INFO", info);
                setMyLocation(info.coords);
            },
            error => console.log("ERROR", error),
            config
            );
    }, []);
    // const [myLocation, setMyLocation] = useState({lat: null, lon: null, });
    /* http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d4041d05e889df96025b49745e6711b9 */
    /* {"coord":{"lon":-0.1257,"lat":51.5085},
        "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
        "base":"stations",
        "main":{"temp":287.47,"feels_like":286.99,"temp_min":286.73,"temp_max":288.3,"pressure":1010,"humidity":78},
        "visibility":10000,
        "wind":{"speed":6.17,"deg":250},
        "clouds":{"all":100},
        "dt":1649090650,
        "sys":{"type":2,"id":2019646,"country":"GB","sunrise":1649050153,"sunset":1649097448},
        "timezone":3600,
        "id":2643743,
        "name":"London",
        "cod":200} */



    /* https://api.openweathermap.org/geo/1.0/direct?q=Tiraspol&limit=5&appid=d4041d05e889df96025b49745e6711b9 */
    /* [
        {
            "name":"Tiraspol City Council",
            "local_names":
            {
                "ja":"ティラスポリ",
                "feature_name":"Tiraspol",
                "ascii":"Tiraspol",
                "et":"Tiraspol",
                "ka":"ტირასპოლი",
                "de":"Stadtkreis Tiraspol",
                "th":"ตีรัสปอล",
                "es":"Tiráspol",
                "ru":"Тираспольский городской совет",
                "zh":"蒂拉斯波尔",
                "az":"Tiraspol",
                "fa":"تیراسپل",
                "hu":"Tiraszpol",
                "mo":"Тираспол",
                "lv":"Tiraspole",
                "be":"Ціраспаль",
                "ro":"Sovetul orășenesc Tiraspol",
                "ta":"திரசுப்போல்",
                "ur":"تیراسپول",
                "ko":"티라스폴",
                "en":"Tiraspol City Council",
                "bg":"Тираспол",
                "pl":"Tyraspol",
                "lt":"Tiraspolis",
                "fr":"Tiraspol",
                "tr":"Tiraspol",
                "gl":"Tiráspol",
                "ca":"Tiraspol",
                "uk":"Тираспольська міська рада",
                "md":"Советул орэшенеск Тираспол",
                "eo":"Tiraspolo",
                "hy":"Տիրասպոլ",
                "he":"טירספול",
                "ar":"تيراسبول",
                "el":"Τιράσπολ"
            },
            "lat":46.8371103,
            "lon":29.6109989,
            "country":"MD",
            "state":"Transnistria"
        },
        {
            "name":"Tiraspol",
            "local_names":
            {
                "ru":"Тирасполь",
                "az":"Tiraspol","de":"Tiraspol","ro":"Tiraspol","ja":"ティラスポリ","ka":"ტირასპოლი","fr":"Tiraspol","hu":"Tiraszpol","bg":"Тираспол","hy":"Տիրասպոլ","md":"Тираспол","en":"Tiraspol","ar":"تيراسبول","lt":"Tiraspolis","zh":"蒂拉斯波尔","feature_name":"Tiraspol","fa":"تیراسپل","ascii":"Tiraspol","tr":"Tiraspol","ca":"Tiraspol","uk":"Тирасполь","be":"Ціраспаль","pl":"Tyraspol","mo":"Тираспол"
            },
            "lat":46.8566229,
            "lon":29.605918132910546,
            "country":"MD",
            "state":"Transnistria"
        },
        {
            "name":"Тирасполь",
            "local_names":
                {
                    "feature_name":"Ciraspaĺ","be":"Ціраспаль","ru":"Тирасполь","ascii":"Ciraspaĺ"
                },
            "lat":55.2222605,
            "lon":30.1182355,
            "country":"BY",
            "state":"Vitsebsk Region"
        },
        {
            "name":"Терасполь",
            "local_names":
            {
                "be":"Цяраспаль",
                "ru":"Терасполь",
                "ascii":"Ciaraspaĺ",
                "feature_name":"Ciaraspaĺ"
            },
            "lat":53.00285,
            "lon":27.30523,
            "country":"BY",
            "state":"Minsk Region"
        },
        {
            "name":"Терасполь",
            "local_names":
            {
                "pl":"Terespol",
                "ru":"Терасполь",
                "ascii":"Ciaraspaĺ",
                "feature_name":"Ciaraspaĺ",
                "be":"Цяраспаль"
            },
            "lat":52.8635751,
            "lon":24.3194817,
            "country":"BY",
            "state":"Hrodna Region"
        }
            ] */
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const APIKey = "d4041d05e889df96025b49745e6711b9";
    // const lat = 50;
    // const lon = 30;
    const city = "Tiraspol";
    let url = baseUrl + "?q=" + city + "&appid=" + APIKey;
    

    const handleGetWeather = () => {
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(json => {
                        console.log(json);
                    });
    }

    const handleGetLocation = () => {
        
    }

    return (
            <View>
                <Text>
                    Home Screen
                </Text>
                <NavBar />
                <WeatherList />    
                <CityList />
                <Button
                    title='Get weather'
                    onPress={handleGetWeather} 
                />
                <Button
                    title='Get Location'
                    onPress={handleGetLocation} 
                />
                <Text>
                    My location (lat={myLocation.latitude}, lon={myLocation.longitude})
                </Text>
            </View>
  );
};

export default HomeScreen;
