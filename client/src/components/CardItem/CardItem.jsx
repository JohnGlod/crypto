import { Like } from '../Like';
import { CardLoader } from '../CardLoader';
import { Link } from 'react-router-dom';

export const CardItem = (props) => {
  const { metadata, loading, token_address, token_id } = props;
  //console.log(props, 'props');
  return (
    <>
      {!loading ? (
        <CardLoader />
      ) : (
        <Link to={`/nft/${token_address}/${token_id}`}>
          <div
            className={`flex flex-col bg-white p-2 rounded-lg text-black-1 w-min-[145px] h-min-[220px] hover:scale-105 duration-300 
  lg:w-[230px] lg:h-[320px] gap-1 border-gray-light border-solid border shadow-lg
dark:bg-black-3 dark:border-none dark:text-white `}
          >
            <img
              className='flex-auto bg-gray-light rounded-lg basis-[130px] h-2/4'
              src={metadata.image}
              alt={metadata.name}
            />
            <div className=''>
              <h2 className='font-semibold'>{metadata.name}</h2>
              <div className='flex items-center justify-between'>
                {/*                {metadata.offer && (
                  <div>
                    <span className='font-semibold'>{metadata.offer}</span> ETH
                  </div>
                )} */}
                <Like numberOfLikes={15} />
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
