import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../imagegalleryitem/ImageGalleryItem';

const ImageGallery = ({ onRender, onShow }) => (
  <ul className={styles.ImageGallery}>
    {onRender.map(image => (
      <ImageGalleryItem
        small={image.smallImg}
        key={image.id}
        data={image.largeImg}
        onShow={onShow}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  onRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      smallImg: PropTypes.string,
      largeImg: PropTypes.string,
    }),
  ).isRequired,
  onShow: PropTypes.func.isRequired,
};
export default ImageGallery;
