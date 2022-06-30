import React, { useEffect } from 'react';
import { useMoralis, useNFTBalances } from 'react-moralis';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Search } from '../../components/Search';
import { Select } from '../../components/Select';
import { Info } from '../../components/Info';
import { UserProfile } from '../../components/UserProfile';
import { GridContainer } from '../../containers/GridContainer';
import { CustomContainer } from '../../containers/CustomContainer';

import {TEST_AVATAR_SRC, TEST_BANNER_SRC} from '../../utils/constants'

export const ProfilePage = () => {
  const { user, setUserData, isUserUpdating, isAuthenticated } = useMoralis();
  const { getNFTBalances, data } = useNFTBalances();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const changeNameAcc = (data) => {
    if (data.trim() !== '') {
      setUserData({
        username: data,
      });
      /* react-form */
      reset();
    }
  };
  useEffect(() => {
    getNFTBalances({
      params: {
        chain: 'ropsten',
        address: user.get('ethAddress'),
      },
    });
  }, []);

  return (
    <section className='dark:text-white '>
      {isAuthenticated ? <UserProfile user={user} avatarSrc={TEST_AVATAR_SRC} banner={TEST_BANNER_SRC} /> : null }
      {data && data?.total > 0 ? (
        <CustomContainer style='flex-col items-center'>
          <div className='hidden px-4 max-w-screen-lg w-full md:flex md:mt-10 justify-between gap-5'>
            <Search />
            <Select />
          </div>
          <GridContainer NFTBalance={data} />
          <button className='w-full md:w-1/4 rounded-lg border-red border px-8 py-2 text-red font-bold mx-auto mt-10 hover:bg-red hover:text-white transaction-all easy-in-out duration-500 '>
            Load more
          </button>
        </CustomContainer>
      ) : (
        <div className='mt-20 py-5'>
          <Info
            infoTitle='No your NFTs found.'
            infoText="Oops, you don't seem to have any NFTs."
          />
        </div>
      )}
    </section>
  );
};
