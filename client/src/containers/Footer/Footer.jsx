import { NavLink } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { SocialList } from '../../components/SocialList';
import { Button } from '../../components/Button';

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
                title={'Email Me!'}
                type={'submit'}
                cName={`text-white rounded-lg bg-red py-2 px-4`}
              />
            </label>
          </div>
          <div className=''>
            <h2 className='font-semibold mb-4 text-lg'>CryptoKet</h2>
            <ul className='flex-col flex gap-4 '>
              <li className=''>
                <NavLink to={'/'}>Explore</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>How it Works</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-semibold mb-4 text-lg'>Support</h2>
            <ul className='flex-col flex gap-4'>
              <li>
                <NavLink to={'/'}>Help center</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Terms of service</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Legal</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Privacy policy</NavLink>
              </li>
            </ul>
          </div>
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
