import './image.css';
import React from 'react';
import PropTypes from 'prop-types'

const Image = props => {
  const { imgSrc, className, imageAlt } = props;

  return (
    <img src={imgSrc} className={className} alt={imageAlt} />
  );
}

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageAlt: PropTypes.string.isRequired
}

export default Image;
