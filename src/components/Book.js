import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, delete: handleRemoveBook }) => (
  <li className="book-card">
    <div className="main-info">
      <div>
        <h4 className="book-cat">{book.category}</h4>
      </div>
      <div>
        <h3 className="book-title">{book.title}</h3>
      </div>
      <div className="book-id">
        Book ID:
        {' '}
        {book.id}
      </div>
    </div>

    <div className="lower-btns flex align-c">
      <p>Comments</p>
      <div className="btn-divider" />
      <button className="rmv-btn" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
      <div className="btn-divider" />
      <p>Edit</p>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

export default Book;
