/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({
  books, filter, delete: handleRemoveBook,
}) => {
  const filteredBooks = () => {
    if (filter === 'All') {
      return books.sort((a, b) => a.id - b.id);
    }
    return books.filter(book => book.category === filter).sort((a, b) => a.id - b.id);
  };

  return (
    <>
      <table>
        <thead>
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
        </thead>
        <tbody>
          {filteredBooks().map(book => <Book key={book.id} book={book} delete={handleRemoveBook} />)}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delete: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  delete: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
