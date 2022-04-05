import { useState } from 'react';
import {BsSearch } from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import { setSearchValue } from '../../store/redusers/selectors/setSearchNFT/setSearchNFT';
export const Search = () => {
/*   const [searchValue, setSearchValue] = useState(''); */
  const handleSearch = ({target}) => {
    setSearchValue(target.value);
  };
  const searchValue = useSelector(setSearchValue)

  return (
    <label className='max-w-screen-sm w-full relative'>
      <input
        className={`w-full rounded-lg px-10 py-2 border-solid border-gray-light text-dark border focus:border-white text-[#24252D]
        dark:bg-[#1B1A21] dark:focus:text-[#fff] dark:border-none `}
        type='search'
        placeholder='Search Item Here'
        value={searchValue}
        onChange={(e) => handleSearch(e)}
      />
      <BsSearch className='text-lg text-gray-middle absolute top-1 left-2 translate-y-2/4'/>
    </label>
  );
};