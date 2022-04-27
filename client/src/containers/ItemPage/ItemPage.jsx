import { useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { useParams } from 'react-router-dom';
import { Moralis } from 'moralis';

import { useIPFS } from '../../hooks/useIPFS';
import { changeTokensLongName } from '../../utils/person';
import { Avatar } from '../../components/Avatar';
import { Tabs } from '../../components/Tabs';
import { Like } from '../../components/Like';
import { Button } from '../../components/Button';
import { ItemsLinkBack } from '../../components/ItemsLinkBack';
import { PictureItem } from '../../components/PictureItem';
import { Tables } from '../../components/Tables';
import { Dialog } from '../../components/Dialog';
import { SocialList } from '../../components/SocialList';

import { CustomContainer } from '../CustomContainer';

export const ItemPage = () => {
  const Web3Api = useMoralisWeb3Api();
  const { resolveLink } = useIPFS();
  const param = useParams();

  const [dialogActive, setDialogActive] = useState(false);
  const [makeOffer, setMakeOffer] = useState(false);

  const [nftItem, setNftItem] = useState(null);

  const fetchAllTokenIds = async () => {
    try {
      const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata({
        address: param.address,
        token_id: param.id,
      });

      if (tokenIdMetadata?.metadata) {
        tokenIdMetadata.metadata = JSON.parse(tokenIdMetadata.metadata);
        tokenIdMetadata.metadata.image =
          resolveLink(tokenIdMetadata.metadata?.image) ??
          resolveLink(tokenIdMetadata.metadata?.image_url);
        setNftItem(tokenIdMetadata);
      }
      console.log(tokenIdMetadata);
    } catch (error) {
      throw new Error('The request failed.', error);
    }
  };

  useEffect(() => {
    fetchAllTokenIds();
  }, []);
  return (
    <CustomContainer
      style={`${
        dialogActive ? 'overflow-hidden' : ''
      } items-start flex-col lg:flex-row`}
    >
      {nftItem && (
        <>
          <ItemsLinkBack />
          <div className='grow lg:basis-3/5'>
            <PictureItem
              pictureImage={nftItem.metadata.image}
              pictureName={nftItem.metadata.name}
              classes='w-full h-full'
            />
          </div>
          <div className='flex flex-col w-full gap-5 px-5 basis-4/12 border-l-2 border-gray-light'>
            <div className='flex items-center gap-5'>
              <h2 className='text-3xl font-semibold'>
                {nftItem.metadata.name}
              </h2>
              <Like numberOfLikes={92} rounded={true} nftItem={nftItem} />
            </div>
            <div className='flex max-w-max gap-2 items-center text-base'>
              <div>
                From <span className='font-semibold'>{10} ETH </span>
              </div>
              &#183;
              <div>20 of 25 available </div>
            </div>
            <Avatar avatarName={nftItem.owner_of} />
            <Tabs discription={nftItem.metadata.description} />
            <div
              className='flex gap-5 items-center  justify-evenly  lg:justify-between'
              data-bs-toggle='modal'
              data-bs-target='#exampleModalCenter'
            >
              <Button
                cName='color-accent text-white font-semibold w-[200px]'
                func={() => setDialogActive(true)}
              >
                Buy for 10 ETH
              </Button>
              <Button cName='border border-red text-red lg:ml-[20px] font-semibold w-[200px]'>
                Make Offer
              </Button>
            </div>
          </div>
          <Dialog active={dialogActive} setActive={setDialogActive}>
            <div className='flex flex-col gap-5'>
              <h4 className=' mx-auto text-2xl font-semibold '>
                {' '}
                Payment Successful{' '}
              </h4>
              <div className='border-y border-gray-light p-8'>
                <Tables
                  name={nftItem.metadata.name}
                  image={nftItem.metadata.image}
                />
              </div>
              <div className='flex gap-5 items-center  justify-center'>
                <Button
                  cName='color-accent text-white font-semibold w-[200px]'
                  func={() => setMakeOffer(true)}
                >
                  Checkout
                </Button>
                <Button
                  cName='border border-red text-red lg:ml-[20px] font-semibold w-[200px]'
                  func={() => setDialogActive(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Dialog>
          <Dialog active={makeOffer} setActive={setMakeOffer}>
            <div className='flex flex-col gap-5 items-center'>
              <h4 className='text-2xl font-semibold '> Check Out </h4>
              <div className=' border-y border-gray-light p-8 '>
                <PictureItem
                  pictureImage={nftItem.metadata.image}
                  pictureName={nftItem.metadata.name}
                  classes='w-52 h-52 mx-auto mb-5'
                />
                <p className='text-center'>
                  You successfully purchased{' '}
                  <span className='font-semibold'>{nftItem.metadata.name}</span>{' '}
                  from{' '}
                  <span className='font-semibold'>
                    {changeTokensLongName(nftItem.owner_of)}
                  </span>
                </p>
              </div>
              <div className='flex gap-5 items-center  justify-center'>
                <SocialList />
              </div>
            </div>
          </Dialog>
        </>
      )}
    </CustomContainer>
  );
};
