import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  setSearchNFT,
  resetOffset,
} from '../../store/redusers/NFTCollectionsSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSearch = ({ target, key }) => {
    if (key === 'Enter') {
      dispatch(resetOffset());
      dispatch(setSearchNFT(target.value));
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
      <BsSearch className='text-lg text-gray-middle absolute top-1 left-2 translate-y-2/4' />
    </label>
  );
};
