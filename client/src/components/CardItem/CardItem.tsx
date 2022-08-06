import { Link } from 'react-router-dom';

import { Like } from '../Like';
import { PictureItem } from '../PictureItem';
import { CardLoader } from '../CardLoader';

import { CardProps } from './CardItem.props';

export const CardItem = ({ loading, nftItem, imageSrc, name}: CardProps) => {

  return (
    <>
      {!loading ? (
        <CardLoader />
      ) : (
        <div
          className={`flex flex-col bg-white p-2 rounded-lg text-black-1 w-min-[145px] h-min-[220px] hover:scale-105 duration-300 
    lg:w-[230px] lg:h-[320px] gap-1 border-gray-light border-solid border shadow-lg
  dark:bg-black-3 dark:border-none dark:text-white `}
        >
          <div className='flex-auto basis-[130px] h-2/4'>
            <Link to={`/nft/${nftItem?.token_address}/${nftItem?.token_id}`}>
              <PictureItem
                pictureImage={imageSrc}
                pictureName={name}
                className='w-full h-full'
              />
            </Link>
          </div>
          <div>
            <p className='font-semibold truncate'>{name}</p>
            <div className='flex items-center justify-between'>
              <div>
                <span className='font-semibold'>0.3</span> ETH
              </div>
              <Like counter={15} nftItem={nftItem} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
