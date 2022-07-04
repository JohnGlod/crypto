import React from 'react'
import { useSelector } from 'react-redux';

import { selectFavorites } from '../../store/redusers/selectors/selectFavorites/selectFavorites.js';

import { UIInfo } from '../../components/UI-Kit';

import { CustomContainer } from '../../containers/CustomContainer';
import { GridContainer } from '../../containers/GridContainer';

export const FollowingPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <CustomContainer style='flex-col items-center'>
      <h3 className='font-semibold text-3xl dark:text-white '>My favorites</h3>
      {favorites.length ? (
        <GridContainer NFTBalance={favorites} fetchSuccess={true} />
      ) : (
        <UIInfo
          infoTitle='No favorites found.'
          infoText='It seems the list of favorites is empty.'
          classes='mt-5'
        />
      )}
    </CustomContainer>
  );
};
