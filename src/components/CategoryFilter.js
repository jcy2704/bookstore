import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <label className="flex align-c" htmlFor="filterSelect">
        <span className="category-header-title">Categories</span>
        <select id="filterSelect" onChange={handleFilter}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
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
