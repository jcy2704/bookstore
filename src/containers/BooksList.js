import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, delete: handleRemoveBook }) => (
  <>
    <CategoryFilter />
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
      {books.map(book => <Book key={book.id} book={book} delete={handleRemoveBook} />)}
    </table>
  </>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delete: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  delete: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
