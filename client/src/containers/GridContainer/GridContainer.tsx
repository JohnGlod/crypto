import React from 'react'

import { CardItem } from '../../components/CardItem';

interface INFTBalance {
  
}

interface IGrid{
  NFTBalance: INFTBalance,
  fetchSuccess: boolean,
}

export const GridContainer = ({ NFTBalance, fetchSuccess} : IGrid) => {
  const renderCards = () => {
    return (!fetchSuccess ? [...Array(8)] : NFTBalance).map((nft, index) => (
      <CardItem
        key={nft?.token_id ?? index}
        metadata={nft?.metadata}
        token_address={nft?.token_address}
        token_id={nft?.token_id}
        loading={fetchSuccess} 
        {...nft}/>
    ))
  }
  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
      {renderCards()}
    </div>
  );
};
