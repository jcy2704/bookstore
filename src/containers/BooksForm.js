import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <form>
        <label>
          Book Title
          <input type="text" />
        </label>
        <label>
          Category
          <select>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default BooksForm;
