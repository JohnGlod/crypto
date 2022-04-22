import React from 'react';
import PropTypes from 'prop-types';

import placeholder from './img/placeholder.jpg';

export const PictureItem = ({ pictureImage, pictureName }) => (
  <object
    className='object-cover object-center rounded-lg w-full h-full'
    data={pictureImage}
    type='image/jpg'
  >
    <img
      className='object-cover object-center rounded-lg w-full h-full'
      src={placeholder}
      alt={pictureName}
    />
  </object>
);

PictureItem.propTypes = {
  pictureImage: PropTypes.string,
  pictureName: PropTypes.string,
};
