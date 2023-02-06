import './section.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  const { className } = props;

  return (
    <section className={className ? className : null} >{props.children}</section>
  );
}

Section.propTypes = {
  paragraphCopy: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Section
