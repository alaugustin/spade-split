import './div.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Div = (props) => {
  const { className } = props;

  return (
    <div className={className ? className : null} >{props.children}</div>
  );
}

Div.propTypes = {
  paragraphCopy: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Div
