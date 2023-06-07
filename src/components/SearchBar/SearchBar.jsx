import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

class SearchBar extends Component {
  handleSumbit = event => {
    event.preventDefault();
    this.props.getImages(event.target.form.elements.query.value);
  };
  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form}>
          <button
            type="sumbit"
            className={style.button}
            onClick={this.handleSumbit}
          >
            <span className={style.button_label}>Search</span>
          </button>
          <input
            name="query"
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></input>
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  getImages: PropTypes.func.isRequired,
};

export default SearchBar;
