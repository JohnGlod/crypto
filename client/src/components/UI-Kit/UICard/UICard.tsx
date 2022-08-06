import { PictureItem } from '../../PictureItem';
import { CardLoader } from '../../CardLoader';
import { CardProps } from './UICard.props';

export const UICard = ({ loading, imageSrc, name }: CardProps) => {
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
            <PictureItem
              pictureImage={imageSrc}
              pictureName={name}
              className='w-full h-full'
            />
          </div>
          <div>
            <p className='font-semibold truncate'>{name}</p>
            <div className='flex items-center justify-between'>
              <div>
                <span className='font-semibold'>0.3</span> ETH
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
