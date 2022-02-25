import React from 'react';
import { CardItem } from './CardItem';
export const GridContainer = ({ items }) => {
  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
      {items?.map((item, id) => (
        <CardItem
          key={id}
          itemName={item.itemName}
          itemId={item.itemId}
          itemSrc={item.itemSrc}
          itemDescr={item.itemDescr}
          itemPrice={item.itemPrice}
          numberOfLikes={item.numberOfLikes}
        />
      ))}
    </div>
  );
};
