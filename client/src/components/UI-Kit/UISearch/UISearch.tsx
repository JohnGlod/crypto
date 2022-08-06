import { KeyboardEvent } from 'react';
import cn from 'classnames';

import { BsSearch } from 'react-icons/bs';
import { SearchProps } from './UISearch.props';

export const UISearch = ({
  onSearch,
  onKeyDown,
  theme,
  ...inputProps
}: SearchProps) => {
  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === 'Enter') onSearch(event.target.value);
    else if (onKeyDown) onKeyDown(event);
  };

  return (
    <label className='max-w-screen-sm w-full relative'>
      <input
        {...inputProps}
        className={cn(
          'w-full rounded-lg pl-10 pr-5 py-2 border border-solid dark:fill-white dark:text-gray-middle dark:bg-[#1B1A21] dark:focus:text-[#fff] dark:border-none',
          {
            'fill-white text-gray-middle bg-[#1B1A21] focus:text-[#fff] border-none':
              theme === 'dark',
            'border-gray-light text-dark focus:border-white text-[#24252D]':
              theme === 'light',
          }
        )}
        type='search'
        placeholder='Search Item Here'
        onKeyDown={handleSearch}
      />
      <BsSearch className='text-2xl text-gray-middle absolute inset-2' />
    </label>
  );
};
