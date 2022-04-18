import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {setItemToFavorite, removeItemFromFavorite} from '../../store/redusers/favoriteSlice'

import { ReactComponent as Liked } from '../../assets/icons/like.svg';
import { ReactComponent as ActiveLike } from '../../assets/icons/like-active.svg';

export const Like = ({ rounded = false, numberOfLikes = 10 }) => {
  const dispath = useDispatch()
  const [liked, setLiked] = useState(false);
  const toggleLike = () => { 
    dispath(setItemToFavorite({id: 'id'}))
    setLiked((prev) => !prev) }
  return (
    <div
      className={`flex items-center gap-[5px] py-1 px-3 ${
        rounded ? 'rounded-full border-gray-light border' : ''
      }`}
    >
      {liked ? (
        <ActiveLike
          onClick={toggleLike}
          className={`w-[12px] h-[12px] fill-red`}
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
