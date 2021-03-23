import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = ({ bookCreator }) => {
  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: '',
  });

  const handleChange = e => {
    if (e.target.id === 'titleInput') {
      setBookInfo({ ...bookInfo, title: e.target.value });
    } else {
      setBookInfo({ ...bookInfo, category: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (bookInfo.title !== '' && bookInfo.category !== '') {
      bookCreator(bookInfo);
      setBookInfo({ title: '', category: '' });
    } else {
      setBookInfo({ ...bookInfo });
    }
  };

  const categories = ['', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <form>
        <label htmlFor="titleInput">
          Book Title
          <input onChange={handleChange} id="titleInput" type="text" value={bookInfo.title} />
        </label>
        <label htmlFor="categoryInput">
          Category
          <select id="categoryInput" onChange={handleChange} value={bookInfo.category}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <button onClick={handleSubmit} type="button">Add Book</button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  bookCreator: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  bookCreator: book => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BooksForm);
