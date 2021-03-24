import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';

const Navbar = ({ changeCat }) => {
  const changeCategory = e => {
    changeCat(e.target.value);
  };

  return (
    <>
      <header>
        <nav className="p-100 flex">
          <h1 className="title">
            Bookstore CMS
          </h1>
          <div className="flex">
            <p className="book-header-title">Books</p>
            <CategoryFilter handleFilter={changeCategory} />
          </div>
        </nav>
      </header>
    </>
  );
};

Navbar.propTypes = {
  changeCat: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeCat: category => dispatch(changeFilter(category)),
});

export default connect(null, mapDispatchToProps)(Navbar);
