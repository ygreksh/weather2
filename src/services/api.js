import { httpClient } from "./httpClient";

export const apiService = {
    getCityWeather(city) {
        return httpClient.get('/data/2.5/weather', {q: city});
    },

    getGPSWeather(location) {
        return httpClient.get('/data/2.5/weather', {lat: location.latitude, lon: location.longitude});
    },

    getSearchCity(city) {
        return httpClient.get('/geo/1.0/direct', params);
    },
    getIconWeather(params) {
        return httpClient.get('/img/wn/', params);
    },
}