import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';

import image from '../../assets/image/logo.png';

export const Info = ({ infoTitle, infoText }) => {
  const navigate = useNavigate();
  return (
    <div
      className=' flex flex-col items-center justify-center w-full py-5 px-2 h-auto gap-5' 
    >
      <img
        className='dark:border-4 rounded-full w-[180px]'
        src={image}
        alt='test'
      />
      <h5 className='font-semibold text-3xl'>{infoTitle}</h5>
      <p className='text-xl '>{infoText}</p>
      <Button
        cName='color-accent w-full max-w-[200px] text-white font-bold uppercase'
        func={() => navigate(-1)}
        type='button'
      >
        Come back
      </Button>
    </div>
  );
};

Info.propTypes = {
  infoTitle: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};
