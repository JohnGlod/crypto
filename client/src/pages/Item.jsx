import { Avatar } from '../components/Avatar';
import { Tabs } from '../components/Tabs';
import { Like } from '../components/Like';
import { Button } from '../components/Button';
import { Popup } from '../components/Popup/Popup';
import { CustomContainer } from '../containers/CustomContainer';

export const Item = ({
  itemName = 'Abstact Smoke Red Blue',
  itemPrice = '4.5',
}) => {
  const openModal = () => {
    console.log('open');
  };
  return (
    <CustomContainer style='justify-between flex-col lg:flex-row '>
      <div className='grow py-5 px-10'>
        <img
          className='w-full h-full rounded-lg object-cover object-center  lg:basis-full'
          src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
          alt=''
        />
      </div>
      <div className='flex flex-col w-full gap-5 px-5 basis-4/12 border-l-2 border-gray-light'>
        <div className='flex items-center gap-5'>
          <h2 className='text-3xl font-semibold'>{itemName}</h2>{' '}
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
        <div className='flex gap-5 items-center justify-between' >
          <Button
            cName='color-accent text-white font-semibold w-[200px]'
            func={openModal}
  
          >
            Buy for {itemPrice} ETH
          </Button>
          <Button
            cName='border border-red text-red lg:ml-[20px] font-semibold w-[200px]'
            func={openModal}
          >
            Make Offer
          </Button>
        </div>
      </div>
    </CustomContainer>
  );
};
