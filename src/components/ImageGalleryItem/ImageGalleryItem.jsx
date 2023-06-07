import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li
        className={style.gallery_item}
        onClick={() => this.props.showModal(this.props.image.id)}
      >
        <img
          className={style.item_img}
          src={this.props.image.webformatURL}
          alt=""
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
