import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const ItemsLinkBack = () => {
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <a className='my-auto' href='#!' onClick={handleGoBack}>
      <IoIosArrowBack
        size={50}
        className={
          'dark:text-white text-gray-light hidden lg:block hover:-translate-x-2 ease-in-out transition-translate  duration-800'
        }
      />
    </a>
  );
};
