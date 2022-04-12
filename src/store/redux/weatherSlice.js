import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Geolocation from '@react-native-community/geolocation';
import { apiService } from "../../services/api";
import { httpClient } from "../../services/httpClient";

const initialState = {
    loading: false,
    myCity: null,
    myLocation: null,
    currentWeather: null,
    selectedCity: null,
    myCityList: [],
};

const weatherSlice = createSlice ({
    name: "weather",
    initialState,
    reducers: {
        setLoading(state, { payload }) {
            state.loading = payload;
          },
      
        setMyCity(state, action) {
            state.myCity = action.payload;
        },

        setMyLocation(state, {payload}) {
            state.myLocation = payload;
        },

        setCurrentWeather(state, action) {
            state.currentWeather = action.payload;
        },

        setSelectedCity(state, action) {
            state.selectedCity = action.payload
        },

        setMyCityList(state, action) {
            state.myCityList = action.myCityList;
        }


    }
});

export const {
    setLoading,
    setMyCity,
    setMyLocation,
    setCurrentWeather,
    setSelectedCity,
    setMyCityList,
} = weatherSlice.actions;

export const selectLoading = state => state.weather.loading;
export const selectMyCity = state => state.weather.myCity;
export const selectMyLocation = state => state.weather.myLocation;
export const selectCurrentWeather = state => state.weather.currentWeather;
export const selectSelectedCity = state => state.weather.selectedCity;
export const selectMyCityList = state => state.weather.myCityList;

export const getMyLocation = createAsyncThunk(
    'weather/getMyLocation',
    (requestValues, { dispatch }) => {
        console.log("weatherSlice getMyLocation");
        dispatch(setLoading(true));
        const config = {
                enableHighAccuracy: true,
                timeout: 2000,
                maximumAge: 3600000,
              };
        Geolocation.getCurrentPosition(
            info => {
                console.log("weatherSlice getMyLocation");
                console.log("INFO", info);
                dispatch(setMyLocation(info.coords));
                // dispatch(setMyCity());
            },
            error => {
                console.log("ERROR", error);
                // Alert.alert("No data, turn on GPS");
                },
                config
        );
        dispatch(setLoading(false));
    }
)

export const getCityWeather = createAsyncThunk(
    'weather/getCityWeather',
    async (requestValues, { dispatch }) => {
        dispatch(setLoading(true));
        try {
            const response = await apiService.weatherCity(requestValues);
            if (!response.data.error) {
                console.log("weatherSlice getCityWeather success");
                const currentWeather = response.data;
                dispatch(setCurrentWeather(currentWeather));
                // dispatch(setMyCity({name: response.data.name, country: response.data.sys.country}));
            }
        } catch (error) {
            
        } 
        dispatch(setLoading(false));
    }
);

export const getGPSWeather = createAsyncThunk(
    'weather/getGPSWeather',
    async (requestValues, { dispatch }) => {
        dispatch(setLoading(true));
        try {
            const response = await apiService.weatherGPS(requestValues);
            if (!response.data.error) {
                console.log("weatherSlice getGPSWeather success");
                const currentWeather = response.data;
                dispatch(setCurrentWeather(currentWeather));
            }
        } catch (error) {
            
        }
        dispatch(setLoading(false));
    }
);

export default weatherSlice.reducer;