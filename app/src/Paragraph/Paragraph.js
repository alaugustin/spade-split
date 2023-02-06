import './paragraph.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = (props) => {
  const { className, paragraphCopy } = props;

  return (
    <p className={className ? className : null} >{paragraphCopy}</p>
  );
}

Paragraph.propTypes = {
  paragraphCopy: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Paragraph
