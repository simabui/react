import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';
import { getRequest } from '../services/services';
import Seachbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/ImageGallery';
import Button from './button/Button';
import Error from './error/Error';

// edit incoming response
function mapper(hits) {
  return hits.map(({ id, webformatURL, largeImageURL }) => {
    return {
      id,
      smallImg: webformatURL,
      largeImg: largeImageURL,
    };
  });
}

class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    collection: [],
    page: 1,
    query: '',
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProp, prevState) {
    const { query, page } = this.state;
    if (prevState.page < page) {
      this.handleRequest(query, page);
      // scroll
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  // axios request with query and page num
  handleRequest = async (type, page) => {
    this.handleLoading(true);
    try {
      const response = await getRequest(type, page);
      this.setState(state => {
        return {
          collection: [...state.collection, ...mapper(response.data.hits)],
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.handleLoading(false);
  };

  handleLoading = bool => {
    this.setState({
      isLoading: bool,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = e.currentTarget.elements;

    this.setState({ query: search.value });
    this.reset();
    // new response
    this.handleRequest(search.value, 1);
  };

  // pagination
  handleClick = () => {
    this.setState(state => {
      return { page: state.page + 1 };
    });
  };

  reset = () => {
    this.setState({ collection: [], page: 1 });
  };

  render() {
    const { collection, isLoading, error } = this.state;
    return (
      <div className={styles.App}>
        <Seachbar onSubmit={this.handleSubmit} />
        <ImageGallery onRender={collection} />
        <Loader
          visible={isLoading}
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          className={styles.Loader}
        />
        {error && <Error text={error} />}
        {collection.length > 1 && <Button onClick={this.handleClick} />}
      </div>
    );
  }
}

export default App;
