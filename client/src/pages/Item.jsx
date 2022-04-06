import { Avatar } from '../components/Avatar';
import { CustomContainer } from '../containers/CustomContainer';
import { Tabs } from '../components/Tabs';
import { Like } from '../components/Like';
export const Item = ({
  itemName = 'Abstact Smoke Red Blue',
  itemPrice = '4.5',
}) => {
  return (
    <CustomContainer style='justify-between flex-col lg:flex-row '>
      <div className='basis-1/2'>
        <img
          className='w-full h-full rounded-lg object-cover object-center  lg:basis-full'
          src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
          alt=''
        />
      </div>
      <div className='flex flex-col w-full gap-3 px-5 basis-1/2'>
        <div className='flex items-center gap-5'>
          <h2 className='text-3xl'>{itemName}</h2>{' '}
          <Like numberOfLikes={92} rounded={true} />
        </div>
        <div className='flex max-w-max gap-2 items-center text-base'>
          <div>
            From <span className='font-semibold'>{itemPrice} ETH </span>
          </div>
          &#183;
          <div>20 of 25 available </div>
        </div>
        <Avatar />
        <Tabs />
        {/* Btns */}
        <div>
          <button className='rounded-lg hover:opacity-80 duration-500 py-2 px-5 '>
            Buy for {itemPrice} ETH
          </button>
          <button className='rounded-lg hover:opacity-80 duration-500 py-2 px-5 '>
            Make Offer
          </button>
        </div>
      </div>
    </CustomContainer>
  );
};
