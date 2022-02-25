import React from 'react';

export const Select = () => {
  return (
    <select
      name='select'
      className='rounded-lg px-5 py-2 border-solid border-gray-light text-dark border focus:border-white text-[#24252D] dark:text-white
    dark:bg-[#1B1A21] dark:focus:text-[#fff] dark:border-none'
    >
      <option value='listed'>Recently Listed</option>
      <option value='visited' selected>
      Most Visited
      </option>
    </select>
  );
};
