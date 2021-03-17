import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, delete: handleRemoveBook }) => (
  <tr>
    <td>
      {book.id}
    </td>
    <td>
      {book.title}
    </td>
    <td>
      {book.category}
    </td>
    <td>
      <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
    </td>
  </tr>
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
