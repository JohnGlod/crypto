import { Avatar } from '../components/Avatar';
import { CustomContainer } from '../containers/CustomContainer';

export const Item = ({ itemName, itemPrice = '4.5' }) => {
  return (
    <CustomContainer>
      <div>
        <img
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
          alt=''
        />
      </div>
      <div>
        <div>
          <h2>{itemName}</h2> <span>92</span>
        </div>
        <div>
          <div>From {itemPrice} ETH </div>
          <div>20 of 25 available </div>
        </div>
        <div>
          <h4>Creator</h4>
          <Avatar />
        </div>
        {/* Tabs */}
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
