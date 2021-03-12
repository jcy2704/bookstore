import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { createBook, removeBook } from '../actions/index';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>
        Book ID
      </th>
      <th>
        Title
      </th>
      <th>
        Category
      </th>
    </tr>
    {books.map(book => <Book key={book} book={book} />)}
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  create: book => dispatch(createBook(book)),
  delete: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
