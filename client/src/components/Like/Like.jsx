import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  setItemToFavorite,
  removeItemFromFavorite,
} from '../../store/redusers/favoriteSlice';

import { ReactComponent as Liked } from '../../assets/icons/like.svg';
import { ReactComponent as ActiveLike } from '../../assets/icons/like-active.svg';

export const Like = ({ rounded = false, numberOfLikes = 10, nftItem }) => {
  const dispath = useDispatch();
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      const token = { id: nftItem.token_id, address: nftItem.token_address };
      dispath(removeItemFromFavorite(token));
    } else {
      dispath(setItemToFavorite(nftItem));
    }
    setLiked((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center gap-[5px] py-1 px-3 
      ${rounded && 'rounded-full border-gray-light border'}`}
    >
      {liked ? (
        <ActiveLike
          onClick={toggleLike}
          className={`w-[12px] h-[12px] fill-red `}
        />
      ) : (
        <Liked
          onClick={toggleLike}
          className={`w-[12px] h-[12px] fill-dark dark:fill-white`}
        />
      )}
      <span>{numberOfLikes}</span>
    </div>
  );
};

Like.propTypes = {
  rounded: PropTypes.bool,
  numberOfLikes: PropTypes.number,
  nftItem: PropTypes.object.isRequired,
};
