import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { Button } from './Button';

const NavbarItem = ({ title, classProps = '', url }) => {
  return (
    <li
      className={`lg:mr-[20px] lg:my-0 mb-4 font-semibold text-base ${classProps}`}
    >
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive ? 'dark:text-white' : 'text-gray-middle'
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

const NavList = [
  { title: 'Explore', url: '/' },
  { title: 'My Items', url: '/profile' },
  { title: 'Following', url: '/followers' },
];

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className='relative'>
        <div className='flex lg:hidden'>
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={'24px'}
              className='cursor-pointer dark:text-white'
              onClick={() => setToggleMenu((prev) => !prev)}
            />
          ) : (
            <HiMenu
              fontSize={'24px'}
              className='cursor-pointer dark:text-white'
              onClick={() => setToggleMenu((prev) => !prev)}
            />
          )}
        </div>
      </div>
      <nav
        className={`absolute top-[90px] bg-white dark:bg-dark px-4 pb-4 z-[1] left-0 w-full min-h-full transition-all duration-500 md:transition-none easy-in
      lg:static lg:flex lg:items-center lg:p-0 lg:z-auto lg:w-auto lg:min-h-min  ${
        toggleMenu ? 'top-20 opacity-100' : '-top-full opacity-0 z-[-5]'
      } lg:opacity-100 `}
      >
        <ul className='lg:flex lg:items-center'>
          {NavList.map((item, index) => (
            <NavbarItem key={index} title={item.title} url={item.url} />
          ))}
        </ul>
        <div className='justify-center flex gap-4 border-solid border-t border-gray-light dark:border-black-1 pt-4 lg:gap-0 lg:justify-start lg:p-0 lg:border-none'>
          <Button
            type={'button'}
            url={'/items/new'}
            title={'Create'}
            cName={'color-accent lg:ml-4 text-white'}
          />
          <Button
            type={'button'}
            url={'/login'}
            title={'Connect'}
            cName={'border border-red text-red lg:ml-[20px]'}
          />
        </div>
      </nav>
    </>
  );
};
