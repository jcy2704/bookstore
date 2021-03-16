import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

export const randInt = (minim, maxim) => {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state, { id: randInt(1, 100), title: action.book.title, category: action.book.category },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};
