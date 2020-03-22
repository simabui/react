import axios from 'axios';

const KEY = '15109703-4df3afa39634f93d9eb19fc69';
const URL = `https://pixabay.com/api/?&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

/* eslint-disable-next-line */
export const getRequest = (query, page) =>
  axios.get(`${URL}&q=${query}&page=${page}`);
