import { useState } from 'react';
import { ReactComponent as Like } from '../assets/icons/like.svg';
import { ReactComponent as ActiveLike } from '../assets/icons/like-active.svg';

export const CardItem = () => {
  const [liked, setLiked] = useState(true);

  return (
    <div
      className={`flex flex-col bg-white p-2 rounded-lg text-black-1 w-[145px] h-[220px] gap-1 border-gray-light border-solid border shadow-lg
    dark:bg-black-3 dark:border-none dark:text-white `}
    >
      {/* img */}
      <div className='flex-auto bg-gray-light rounded-lg basis-[130px] h-2/4'></div>
      <div className=''>
        <h2 className='font-semibold'>NFT Name</h2>
        <div className='flex items-center justify-between'>
          <div>
            <span className='font-semibold'>0.00</span> ETH
          </div>
          <div className='flex items-center gap-[5px]'>
            {liked ? (
              <ActiveLike className={`w-[12px] h-[12px]`} />
            ) : (
              <Like className={`w-[12px] h-[12px]`} />
            )}
            <span>92</span>
          </div>
        </div>
      </div>
    </div>
  );
};
