import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '1447587a69ffcd58f4a7dfca0fcab084';

export const getTrending = () => axios.get(`/trending/all/day?api_key=${KEY}`);
export const getMovie = id =>
  axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`);

export const getCast = id => axios.get(`/movie/${id}/credits?api_key=${KEY}`);
export const getReview = id =>
  axios.get(`/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
