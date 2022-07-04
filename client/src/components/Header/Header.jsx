import React from 'react';

import { useDarkMode } from '../../hooks/useDarkMode';

import { UILogo } from '../../components/UI-Kit';
import { Navbar } from '../../components/Navbar';
import { Search } from '../../components/Search';

export const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className='w-full border-solid border-b border-gray-light dark:border-[#2D2E36] dark:text-white '>
      <div className='flex justify-between items-center dark:bg-dark p-5 max-w-screen-2xl mx-auto gap-5'>
        <UILogo logoClick={toggleDarkMode} theme={isDarkMode} />
        <Search />
        <Navbar />
      </div>
    </header>
  );
};
