import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = '1447587a69ffcd58f4a7dfca0fcab084';

/* eslint-disable-next-line */
export const getTrending = () => axios.get(`3/trending/all/day?api_key=${KEY}`);
export const getMovie = id =>
  axios.get(`3/movie/${id}?api_key=${KEY}&language=en-US`);
