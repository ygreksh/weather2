import Axios from "axios";
import { APIKey } from "../config/constants";
const config = {
    baseURL: "http://api.openweathermap.org/",
  };

export const axios = Axios.create(config);


axios.interceptors.request.use(
  (config) => {
    console.log('> REQUEST')
    console.log(`${config.method.toUpperCase()} ${config.baseURL + config.url}`)
    config.params = {
      ...config.params,
      appid: APIKey
    }

    console.log(config.params)

    return config;
  },
  (err) => {
    console.log(err)
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log('< RESPONSE')
    console.log(response.data)

    return response
  },
  (err) => {
    console.log(err)
  }
);

export const httpClient = {
  get(url, params) {
    return axios.get(url, {
      params,
    });
  },
  post(url, data, headers) {
    return axios.post(url, data, headers);
  },
  put(url, data) {
    return axios.put(url, data);
  },
  patch(url, data) {
    return axios.patch(url, data);
  },
  delete(url, data) {
    return axios.delete(url, data);
  },
};
