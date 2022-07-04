import React from 'react';
import {ButtonProps} from './UIButton.props';

export const UIButton = ({
buttonClick,
children,
type = 'button', 
cName
} : ButtonProps) => (
  <button
    type={type}
    className={`
      hover:shadow-md hover:shadow-red focus:shadow-red focus:shadow-md focus:outline-none focus:ring-0 active:shadow-md 
      transition duration-150 ease-in-out rounded-lg py-2 px-5 ${cName}`}
    onClick={buttonClick}
  >
    {children}
  </button>
);
