import React from 'react'
import { NavLink } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { SocialList } from '../../components/SocialList';
import { Button } from '../../components/Button';

const ListItem = ({url, text}) => {
  return (
    <li className='hover:text-red hover:underline ease-in-out transition-all underline-offset-4 duration-300 '>
      <NavLink to={url}>{text}</NavLink>
    </li>
  );
};
const FooterList = [
  {
    title: 'CryptoKet',
    data: [
      { url: '/', text: 'Explore' },
      { url: '/', text: 'How it Works' },
      { url: '/', text: 'Contact Us' },
    ],
  },
  {
    title: 'Support',
    data: [
      { url: '/', text: 'Help center' },
      { url: '/', text: 'Terms of service' },
      { url: '/', text: 'Legal' },
      { url: '/', text: 'Privacy policy' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className='w-full dark:text-white'>
      <div className='border-y-gray-light border-x-0 dark:border-y-black-1 border-solid border-2 '>
        <div
          className={`p-5 flex justify-between  flex-wrap gap-[35px] md:flex-nowrap max-w-screen-2xl mx-auto`}
        >
          <div
            className={`flex-col flex gap-5 flex-auto w-full md:flex-none md:w-auto`}
          >
            <Logo />
            <h4 className='text-base'>Get the lastes Updates</h4>
            <label htmlFor='' className={`flex `}>
              <input
                type='email'
                className={`border border-solid border-gray-light rounded-lg py-1 px-3 w-4/5 md:w-auto
              dark:bg-black-2 dark:border-none dark:text-white`}
                placeholder={'Your Email'}
              />
              <Button
                type='submit'
                cName='text-white rounded-lg bg-red py-2 px-4'
              >
                Email Me!
              </Button>
            </label>
          </div>
          {FooterList.map(({ title, data }, index) => (
            <div key={index}>
              {title && <h2 className='font-semibold mb-4 text-lg'>{title}</h2>}
              <ul className='flex-col flex gap-4 '>
                {data &&
                  data.map(({ url, text }, index) => (
                    <ListItem key={index} url={url} text={text} />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-col items-center p-5
      md:flex-row sm:justify-between max-w-screen-2xl mx-auto`}
      >
        <span className='font-semibold '>
          CrpytoKet, Inc. All Rights Reserved
        </span>
        <SocialList />
      </div>
    </footer>
  );
};
