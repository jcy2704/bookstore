/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <label>
        Category Filter
        <select onChange={handleFilter}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
    </>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
