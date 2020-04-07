import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './components/App';
import './styles/styles.css';
import configureStore from './redux/configureStore';
// redux store
console.log(configureStore());
ReactDOM.render(<App />, document.getElementById('root'));
