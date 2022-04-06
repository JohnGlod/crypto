import React from 'react';

export const Avatar = ({ imgSrc, name = 'Mia Ayana' }) => {
  return (
    <>
      <h4 className='text-xs mb'>Creator</h4>
      <div className='flex items-center w-[140px] justify-between '>
        <img
          className='rounded-full w-[50px] h-[50px] object-cover object-center border-2 border-dark'
          src='https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg'
          alt='my avatar'
        />
        <h5 className='text-base'>{name}</h5>
      </div>
    </>
  );
};
