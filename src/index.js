import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const randomInt = (minim, maxim) => {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const initialState = [
  { id: randomInt(1, 100), title: 'Book1', category: 'Horror' },
  { id: randomInt(1, 100), title: 'Book2', category: 'Action' },
  { id: randomInt(1, 100), title: 'Book3', category: 'Biography' },
  { id: randomInt(1, 100), title: 'Book4', category: 'History' },
  { id: randomInt(1, 100), title: 'Book5', category: 'Kids' },
  { id: randomInt(1, 100), title: 'Book6', category: 'Learning' },
  { id: randomInt(1, 100), title: 'Book7', category: 'Sci-Fi' },
];

const store = createStore(reducer, { books: initialState });

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  wrappedApp,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
