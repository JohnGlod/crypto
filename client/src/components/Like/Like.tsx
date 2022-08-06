// @ts-nocheck
import { useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import {
  setItemToFavorite,
  removeItemFromFavorite,
} from '../../store/features/favorites/slice';

import { ReactComponent as Liked } from '../../assets/icons/like.svg';
import { ReactComponent as ActiveLike } from '../../assets/icons/like-active.svg';
import { LikeProps } from './Like.props';

export const Like = ({ rounded = false, counter = 10, nftItem} : LikeProps) => {
  const dispath = useAppDispatch()
  const [liked, setLiked] = useState(false);

  const handleClick = () => { 
    if (liked) {
      dispath(removeItemFromFavorite({ id: nftItem.token_id}));
    } else {
      dispath(setItemToFavorite(nftItem));
    }
    setLiked((prev) => !prev);
  };

  return (
    <button
      className={`flex items-center gap-[5px] py-1 px-3 
      ${rounded && 'rounded-full border-gray-light border'}`}
      onClick={handleClick}
    >
      {liked ? (
        <ActiveLike
          className={`w-[12px] h-[12px] fill-red `}
        />
      ) : (
        <Liked
          className={`w-[12px] h-[12px] fill-dark dark:fill-white`}
        />
      )}
      <span>{counter}</span>
    </button>
  );
};
