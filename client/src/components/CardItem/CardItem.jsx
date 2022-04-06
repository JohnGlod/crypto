import { Like } from '../Like';

export const CardItem = (props) => {
  const { itemName, itemId, itemSrc, itemDescr, itemPrice, numberOfLikes } =
    props;
  return (
    <div
      className={`flex flex-col bg-white p-2 rounded-lg text-black-1 w-[145px] h-[220px] 
      lg:w-[230px] lg:h-[320px] gap-1 border-gray-light border-solid border shadow-lg
    dark:bg-black-3 dark:border-none dark:text-white `}
    >
      <img
        className='flex-auto bg-gray-light rounded-lg basis-[130px] h-2/4'
        src={itemSrc}
        alt={itemName}
      />
      <div className=''>
        <h2 className='font-semibold'>{itemName}</h2>
        <div className='flex items-center justify-between'>
          <div>
            <span className='font-semibold'>{itemPrice}</span> ETH
          </div>
          <Like numberOfLikes={15} />
        </div>
      </div>
    </div>
  );
};
