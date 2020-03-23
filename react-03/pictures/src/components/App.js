import React, { Component } from 'react';
import styles from './App.module.css';
import { getRequest } from '../services/services';
import Seachbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/ImageGallery';
import Button from './button/Button';

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
    // error: null,
    // isLoading: false,
  };

  async componentDidUpdate(prevProp, prevState) {
    const { query, page } = this.state;
    if (prevState.page < page) {
      const response = await getRequest(query, page);
      this.updateCollection(response.data.hits);
    }
  }

  // axios request with query and page num
  handleRequest = async (type, page) => {
    const response = await getRequest(type, page);
    this.setState({
      collection: mapper(response.data.hits),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = e.currentTarget.elements;
    this.setState({ query: search.value, page: 1 });
    // get images with page = 1
    this.handleRequest(search.value, 1);
    window.scrollTo(0, 0);
  };

  handleClick = () => {
    this.setState(state => {
      return { page: state.page + 1 };
    });
  };

  updateCollection = newData => {
    this.setState(state => {
      return {
        collection: [...state.collection, ...mapper(newData)],
      };
    });
  };

  render() {
    const { collection } = this.state;
    return (
      <div className={styles.App}>
        <Seachbar onSubmit={this.handleSubmit} />
        <ImageGallery onRender={collection} />
        {collection.length > 1 && <Button onClick={this.handleClick} />}
      </div>
    );
  }
}

export default App;
