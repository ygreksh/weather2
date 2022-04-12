import { httpClient } from "./httpClient";

export const apiService = {
    weatherCity( city ) {
      return httpClient.get('/data/2.5/weather', {
        q: city,
      });
    },
  
    weatherGPS(params) {
      return httpClient.get('/data/2.5/weather', {lat: params.latitude, lon: params.longitude});
    },
  
    getCities(params) {
      return httpClient.get('/geo/1.0/direct', params);
    },

    getIcon(params) {
        return httpClient.get('/img/wn', params);
      },
  };
  
