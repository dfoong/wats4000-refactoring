// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
//Set common parameters for each request to the API. 
config.params.APPID = '451b0f7d1cc5e268b50414e15b88ab7e';
config.params.units = 'metric';

return config;
}, function (error) {
    return Promise.reject(error);
});
