import axios from "axios";

const base_api_url = "https://api.themoviedb.org/3";

export const baseURL = "https://www.themoviedb.org/t/p/";

const api_key = process.env.REACT_APP_TMDB_API_KEY;

const httpInstance = axios.create({
  baseURL: base_api_url,
  params: {
    api_key: api_key,
  },
});

// httpInstance.interceptors.request.use((config) => {
//   // const api_key = process.env.REACT_APP_TMDB_API_KEY;
//   console.log(config);
//   // if (!config.params)
//   // config.params.api_key = api_key;
//   // console.log(api_key);
// }, (error) => {//error handler});

export default httpInstance;
