import React, { Component, lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';
import getRequestDebounced from '../services/services';
import Seachbar from './searchbar/Searchbar';
import Button from './button/Button';
import Error from './error/Error';
import Modal from './Modal/Modal';

// REACT lazy
const AsyncImageGallery = lazy(() =>
  import(/* webpackChunkName: "imageGallery" */ './imagegallery/ImageGallery'),
);

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
  page = 1;

  static propTypes = {};

  static defaultProps = {};

  state = {
    collection: [],
    query: '',
    error: null,
    isLoading: false,
    isOpen: false,
    largeImg: '',
  };

  componentDidMount() {
    this.handleRequest();
  }

  // rerequest on new query
  componentDidUpdate(prevProp, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.handleRequest(query, this.page);
    }
  }

  // axios request with query and page num
  handleRequest = async (type, page) => {
    this.handleLoading(true);
    try {
      const response = await getRequestDebounced(type, page);
      this.setState(state => {
        return {
          collection: [...state.collection, ...mapper(response.data.hits)],
        };
      });
    } catch (error) {
      // send error to Error state
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
    this.page += 1;
    const { query } = this.state;
    this.handleRequest(query, this.page).then(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  reset = () => {
    this.page = 1;
    this.setState({ collection: [] });
  };

  // Modal
  handleShowModal = largeImg => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
      largeImg,
    });
  };

  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { collection, isLoading, error, isOpen, largeImg } = this.state;
    return (
      <div className={styles.App}>
        <Seachbar onSubmit={this.handleSubmit} />
        <Suspense fallback={<></>}>
          <AsyncImageGallery
            onRender={collection}
            onShow={this.handleShowModal}
          />
        </Suspense>
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
        {isOpen && <Modal image={largeImg} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
