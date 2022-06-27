import React from 'react'

import { Logo } from '../../components/Logo';
import { Navbar } from '../../components/Navbar';
import { Search } from '../../components/Search';

export const Header = () => {
  return (
    <header className='w-full border-solid border-b border-gray-light dark:border-[#2D2E36] dark:text-white '>
      <div className='flex justify-between items-center dark:bg-dark p-5 max-w-screen-2xl mx-auto gap-5'>
        <Logo />
        <Search />
        <Navbar />
      </div>
    </header>
  );
};
