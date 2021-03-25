import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, delete: handleRemoveBook }) => (
  <li className="book-card flex align-c">
    <div>
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
    </div>

    <div className="progress flex align-c">
      <div className="porcentage-oval flex align-c"><span /></div>
      <div className="porcentage-cont">
        <p className="porcentage">64%</p>
        <p className="completed">Completed</p>
      </div>
    </div>

    <div className="divider" />

    <div className="chapter-cont">
      <p className="current-ch">CURRENT CHAPTER</p>
      <p className="chapter">Chapter 17</p>
      <button className="updt-progress" type="button">UPDATE PROGRESS</button>
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
