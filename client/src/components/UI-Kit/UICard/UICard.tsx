import { Link } from 'react-router-dom';

import { Like } from '../../Like';
import { PictureItem } from '../../PictureItem';
import { CardLoader } from '../../CardLoader';

import { CardProps } from './UICard.props';
export const UICard = ({
  metadata,
  loading,
  token_address,
  token_id,
}: CardProps) => (
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
          <Link to={`/nft/${token_address}/${token_id}`}>
            <PictureItem
              pictureImage={metadata.image ?? metadata.image_url}
              pictureName={metadata.name}
              className='w-full h-full'
            />
          </Link>
        </div>
        <div className=''>
          <h2 className='font-semibold truncate'>{metadata.name}</h2>
          <div className='flex items-center justify-between'>
            <div>
              <span className='font-semibold'>0.3</span> ETH
            </div>
            <Like
              numberOfLikes={15}
              nftItem={{ metadata, token_address, token_id }}
            />
          </div>
        </div>
      </div>
    )}
  </>
);