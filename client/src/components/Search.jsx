import { useState } from 'react';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <label className='basis-4/12 '>
      <input
        className={`w-full rounded-lg px-5 py-2 border-solid border-gray-light text-dark border focus:border-white text-[#24252D]
        dark:bg-[#1B1A21] dark:focus:text-[#fff] dark:border-none`}
        type='search'
        placeholder='Search Item Here'
        value={searchValue}
        onChange={(e) => handleSearch(e)}
      />
    </label>
  );
};
