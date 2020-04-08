import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/styles.css';
import configureStore from './redux/configureStore';
import phonebookReducers from './redux/reducers/phonebook';

// redux store
const store = configureStore(phonebookReducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
