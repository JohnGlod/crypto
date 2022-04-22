import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  children,
  cName = '',
  func = Function.prototype,
  type = 'button',
}) => (
  <button
    type={type}
    className={`
      hover:shadow-md hover:shadow-red focus:shadow-red focus:shadow-md focus:outline-none focus:ring-0 active:shadow-md 
      transition duration-150 ease-in-out rounded-lg py-2 px-5 ${cName}`}
    onClick={func}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  func: PropTypes.func,
  cName: PropTypes.string,
  type: PropTypes.string,
};
