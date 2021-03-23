/* eslint-disable react/no-array-index-key */
import React from 'react';

const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <label>
        Category Filter
        <select>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
    </>
  );
};

export default CategoryFilter;
