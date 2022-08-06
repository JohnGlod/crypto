// @ts-nocheck

import React, { useEffect, useState } from 'react';
import { useMoralis, useNFTBalances } from 'react-moralis';
import { useForm } from 'react-hook-form';

import { Search } from '../../components/Search';
import { UserProfile } from '../../components/UserProfile';
import { GridContainer, CustomContainer } from '../../containers';

import { UIInfo, UISelect } from '../../components/UI-Kit';

import { TEST_AVATAR_SRC, TEST_BANNER_SRC } from '../../utils/constants';

export const Profile = () => {
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

  const selectOptions = [
    {
      value: 'all',
      key: '1',
      text: 'All',
    },
    { value: 'listed', key: '2', text: 'Recently Listed' },
    { value: 'visited', key: '3', text: ' Most Visited' },
  ];

  const changeNameAcc = (data) => {
    if (data.trim() !== '') {
      setUserData({
        username: data,
      });
      /* react-form */
      reset();
    }
  };

  const [filter, setFilter] = useState('');

  const handleFilter = (e) => {
    const { target } = e;
    if (target) setFilter(target.value);
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
      {isAuthenticated ? (
        <UserProfile
          user={user}
          avatarSrc={TEST_AVATAR_SRC}
          banner={TEST_BANNER_SRC}
        />
      ) : null}
      {data && data?.total > 0 ? (
        <CustomContainer className='flex-col items-center'>
          <div className='hidden px-4 max-w-screen-lg w-full md:flex md:mt-10 justify-between gap-5'>
            <Search />
            <UISelect
              options={selectOptions}
              className='mb-8 '
              placeholder='Choose a filter...'
              name='Filter'
              value={filter}
              onChange={handleFilter}
            />
          </div>
          <GridContainer list={data} loading={false} />
          <button className='w-full md:w-1/4 rounded-lg border-red border px-8 py-2 text-red font-bold mx-auto mt-10 hover:bg-red hover:text-white transaction-all easy-in-out duration-500 '>
            Load more
          </button>
        </CustomContainer>
      ) : (
        <div className='mt-20 py-5'>
          <UIInfo
            infoTitle='No your NFTs found.'
            infoText="Oops, you don't seem to have any NFTs."
          />
        </div>
      )}
    </section>
  );
};
