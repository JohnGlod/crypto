import React from 'react';
import PropTypes from 'prop-types'

export const CustomContainer = ({ style = '' ,children }) => {
  return (
    <div className={`w-full py-10 px-5 flex gap-5 max-w-screen-2xl mx-auto dark:text-white min-h-fit  ${style}`}>
      {children}
    </div>
  );
};

CustomContainer.propTypes = {
  style: PropTypes.string, 
  children: PropTypes.oneOfType([
    PropTypes.element, 
    PropTypes.elementType,
  ])
}
