import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ small }) => (
  <li className={styles.ImageGalleryItem}>
    <img src={small} alt="" className={styles['ImageGalleryItem-image']} />
  </li>
);

ImageGalleryItem.propTypes = {
  small: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
