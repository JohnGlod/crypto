import { useState } from 'react';

export const Card = () => {
  const [liked, setLiked] = useState(false);
  const imageSrc = liked
    ? 'images/icons/like.svg'
    : 'images/icons/like-active.svg';
  return (
    <div className='flex flex-col bg-white p-2 rounded-lg text-black-1 dark:bg-dark dark:text-white w-[145px] h-[220px] gap-1'>
      {/* img */}
      <div className='flex-auto bg-gray-light rounded-lg basis-[130px] h-2/4'></div>
      <div className=''>
        <h2 className='font-semibold'>NFT Name</h2>
        <div className='flex items-center justify-between'>
          <div><span className='font-semibold'>0.00</span> ETH</div>
          <div className='flex items-center gap-[5px]'>
            <img src={imageSrc} alt='liked' className='w-[12px] h-[12px]' />
            <span>92</span>
          </div>
        </div>
      </div>
    </div>
  );
};
