import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

export const Search = () => {
  const [value, setValue] = useState('');
  const [_, setSearchParams] = useSearchParams();

  const handleSearch = ({ target, key }) => {
    if (key === 'Enter') {
      setSearchParams({ q: target.value });
    }
  };

  return (
    <label className='max-w-screen-sm w-full relative'>
      <input
        className={`w-full rounded-lg px-10 py-2 border-solid border-gray-light text-dark border focus:border-white text-[#24252D]
        dark:bg-[#1B1A21] dark:focus:text-[#fff] dark:border-none `}
        type='search'
        placeholder='Search Item Here'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
      />
      <BsSearch className='text-2xl text-gray-middle absolute top-2 left-2 ' />
    </label>
  );
};
