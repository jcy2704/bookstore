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

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <form className="p-100 form">
        <h2 className="add-new-book">ADD NEW BOOK</h2>
        <div className="flex just-sb">
          <input onChange={handleChange} id="titleInput" type="text" value={bookInfo.title} placeholder="Book Title" />
          <select id="categoryInput" className="pointer" onChange={handleChange} value={bookInfo.category}>
            <option className="categories-option" value="" disabled selected>Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button className="add-btn pointer" onClick={handleSubmit} type="button">Add Book</button>
        </div>
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
