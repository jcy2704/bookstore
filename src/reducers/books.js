import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

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

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state, book: action.book,
      };
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};
