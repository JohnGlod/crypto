import React from 'react';
import { CardItem } from '../../components/CardItem';

export const GridContainer = ({ NFTBalance, fetchSuccess}) => {
  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
      {NFTBalance && NFTBalance.map((nft) => (
        <CardItem
          key={nft.token_id}
          itemId={nft.token_id}
          itemName={nft.metadata.name}
          itemSrc={nft.metadata.image}
          itemDescr={nft.metadata.description}
          //itemPrice={nft.metadata.name}
          //numberOfLikes={item.numberOfLikes}
        />
      ))}
    </div>
  );
};
