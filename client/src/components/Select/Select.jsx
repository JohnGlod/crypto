import React, { useState } from 'react';

export const Select = () => {
  const [filter, setFilter] = useState('all');
  const handleChange = ({ target }) => setFilter(target.value);

  return (
    <select
      onChange={(e) => handleChange(e)}
      value={filter}
      name='select'
      className='rounded-lg px-5 py-2 border-solid border-gray-light text-dark border focus:border-white text-[#24252D] dark:text-white
    dark:bg-[#1B1A21] dark:focus:text-[#fff] dark:border-none'
    >
      <option disabled>Choose a filter...</option>
      <option value='all'> All </option>
      <option value='listed'>Recently Listed</option>
      <option value='visited'> Most Visited</option>
    </select>
  );
};
