import axios from "axios";

const api = axios.create({
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services",
  timeout: 10000,
});

export default api;
