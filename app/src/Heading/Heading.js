import './heading.css'
import React from 'react';
import PropTypes from 'prop-types'

const Heading = props => {
  const { HeadingTag, className, text } = props;

  return (
    <HeadingTag className={className ? className : ''}>
      {text}
    </HeadingTag>
  );
}

Heading.propTypes = {
  HeadingTag: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Heading;
