/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ small, onShow, data }) => (
  <li className={styles.ImageGalleryItem} onClick={onShow}>
    <img
      src={small}
      alt="small"
      className={styles['ImageGalleryItem-image']}
      data-large={data}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  small: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
