import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/App';
import { randInt } from './reducers/books';
import reportWebVitals from './reportWebVitals';

const initialState = [
  { id: randInt(1, 1000), title: 'Frankenstein', category: 'Horror' },
  { id: randInt(1, 1000), title: 'The Haunting of Hill House', category: 'Horror' },
  { id: randInt(1, 1000), title: 'The Shining', category: 'Horror' },
  { id: randInt(1, 1000), title: 'Game of Thrones', category: 'Action' },
  { id: randInt(1, 1000), title: 'Ready Player One', category: 'Action' },
  { id: randInt(1, 1000), title: 'Divergent', category: 'Action' },
  { id: randInt(1, 1000), title: 'A Promised Land', category: 'Biography' },
  { id: randInt(1, 1000), title: 'The Diary of Anne Frank', category: 'Biography' },
  { id: randInt(1, 1000), title: 'Long Walk to Freedom', category: 'Biography' },
  { id: randInt(1, 1000), title: '1776', category: 'History' },
  { id: randInt(1, 1000), title: '1491', category: 'History' },
  { id: randInt(1, 1000), title: 'Genghis Khan', category: 'History' },
  { id: randInt(1, 1000), title: 'The Cat in the Hat', category: 'Kids' },
  { id: randInt(1, 1000), title: 'The Tale of Peter the Rabit', category: 'Kids' },
  { id: randInt(1, 1000), title: "Charlotte's Web", category: 'Kids' },
  { id: randInt(1, 1000), title: 'Deep Learning', category: 'Learning' },
  { id: randInt(1, 1000), title: 'Make it Stick', category: 'Learning' },
  { id: randInt(1, 1000), title: 'How We Learn', category: 'Learning' },
  { id: randInt(1, 1000), title: 'Dune', category: 'Sci-Fi' },
  { id: randInt(1, 1000), title: 'The Martian', category: 'Sci-Fi' },
  { id: randInt(1, 1000), title: 'Children of Time', category: 'Sci-Fi' },
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
