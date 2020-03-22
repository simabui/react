import React, { Component } from 'react';
import styles from './App.module.css';
import { getRequest } from '../services/services';
import Seachbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/ImageGallery';

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
    // error: null,
    // isLoading: false,
  };

  handleRequest = async type => {
    const { page } = this.state;
    // axios request with query and page num
    const response = await getRequest(type, page);
    this.setState({
      collection: mapper(response.data.hits),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { search } = e.currentTarget.elements;
    this.handleRequest(search.value);
  };

  render() {
    const { collection } = this.state;
    return (
      <div className={styles.App}>
        <Seachbar onSubmit={this.handleSubmit} />
        <ImageGallery onRender={collection} />
      </div>
    );
  }
}

export default App;
