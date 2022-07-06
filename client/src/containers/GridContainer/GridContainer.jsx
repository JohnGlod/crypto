import React from 'react';

import { UICard } from '../../components/UI-Kit';

export const GridContainer = ({ NFTBalance, fetchSuccess }) => {

  const renderCards = () => {
    return (!fetchSuccess ? [...Array(8)] : NFTBalance).map((nft, index) => {
      if (nft?.metadata){
        const name = nft?.metadata?.name;
        const imageSrc = nft?.metadata?.image;

        return (
          <UICard
            key={nft?.token_id}
            loading={fetchSuccess}
            name={name}
            imageSrc={imageSrc}
            nftItem={nft}
          />
        );
      }
      return <UICard key={index} loading={fetchSuccess} />
    })
  };

  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
      {renderCards()}
    </div>
  );
};
