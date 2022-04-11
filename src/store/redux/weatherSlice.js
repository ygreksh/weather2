import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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

        setMyLocation(state, action) {
            state.myLocation = action.payload;
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

export const selectLoading = state => state.tv.loading;
export const selectMyCity = state => state.weather.myCity;
export const selectMyLocation = state => state.weather.myLocation;
export const selectCurrentWeather = state => state.weather.currentWeather;
export const selectSelectedCity = state => state.weather.selectedCity;
export const selectMyCityList = state => state.weather.myCityList;

export const getCityWeather = createAsyncThunk(
    'weather/getCityWeather',
    async (requestValues, { dispatch }) => {
        dispatch(setLoading(true));
        try {
            const response = await apiService.weatherCity(requestValues);
            if (!response.data.error) {
                const currentWeather = response.data;
                dispatch(setCurrentWeather(currentWeather));
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
                const currentWeather = response.data;
                dispatch(setCurrentWeather(currentWeather));
            }
        } catch (error) {
            
        }
        dispatch(setLoading(false));
    }
)