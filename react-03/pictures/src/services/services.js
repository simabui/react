import axios from 'axios';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const KEY = '15109703-4df3afa39634f93d9eb19fc69';
axios.defaults.baseURL = `https://pixabay.com/api`;

const getRequest = (query = '', page = 1) =>
  axios.get(
    `?&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${query}&page=${page}`,
  );

// debounce
export default AwesomeDebouncePromise(getRequest, 1000);
