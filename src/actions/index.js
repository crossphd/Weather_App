import axios from 'axios'

const API_KEY = '5acee2d00720f9402e3572bf241070bf';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}q=${city},us&APPID=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
