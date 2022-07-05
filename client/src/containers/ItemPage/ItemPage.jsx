import React, { useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { useParams } from 'react-router-dom';
import { Moralis } from 'moralis';

import { useIPFS } from '../../hooks/useIPFS';
import { changeTokensLongName } from '../../utils/person';
import { TEST_AVATAR_SRC } from '../../utils/constants';

import { UIAvatar, UIButton, UIDialog, UIHtag, UITabs} from '../../components/UI-Kit';
import { Tabs } from '../../components/Tabs';
import { Like } from '../../components/Like';

import { ItemsLinkBack } from '../../components/ItemsLinkBack';
import { PictureItem } from '../../components/PictureItem';
import { Tables } from '../../components/Tables';
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
              className='w-full h-full'
            />
          </div>
          <div className='flex flex-col w-full gap-5 px-5 basis-4/12 border-l-2 border-gray-light'>
            <div className='flex items-center gap-5'>
              <UIHtag tag='h1'>
                {nftItem.metadata.name}
              </UIHtag>
              <Like numberOfLikes={92} rounded={true} nftItem={nftItem} />
            </div>
            <div className='flex max-w-max gap-2 items-center text-base'>
              <div>
                From <span className='font-semibold'>{10} ETH </span>
              </div>
              &#183;
              <div>20 of 25 available </div>
            </div>

            <span className='text-xs mb'>Creator</span>
            <div className='flex items-center max-w-[200px] gap-5'>
              <UIAvatar
                avatarSize='small'
                avatarClick={() => console.log('avatar')}
                avatarSrc={TEST_AVATAR_SRC}
                avatarAlt='Creator'
              />
              <p className='text-base'>
                {changeTokensLongName(nftItem.owner_of)}
              </p>
            </div>

            <Tabs discription={nftItem.metadata.description} />
            <div
              className='flex gap-5 items-center  justify-evenly  lg:justify-between'
              data-bs-toggle='modal'
              data-bs-target='#exampleModalCenter'
            >
              <UIButton
                appearance='primary'
                onClick={() => setDialogActive(true)}
                className='w-[200px]'
              >
                Buy for 10 ETH
              </UIButton>
              <UIButton className='w-[200px]' appearance='secondary'>
                Make Offer
              </UIButton>
            </div>
          </div>
          <UIDialog active={dialogActive} setActive={setDialogActive}>
            <div className='flex flex-col gap-5'>
              <UIHtag tag='h2' className='mx-auto'>
                Payment Successful
              </UIHtag>
              <div className='border-y border-gray-light p-8'>
                <Tables
                  name={nftItem.metadata.name}
                  image={nftItem.metadata.image}
                />
              </div>
              <div className='flex gap-5 items-center  justify-center'>
                <UIButton
                  className='w-[200px]'
                  appearance='primary'
                  onClick={() => setMakeOffer(true)}
                >
                  Checkout
                </UIButton>
                <UIButton
                  className='lg:ml-[20px] w-[200px]'
                  appearance='secondary'
                  onClick={() => setDialogActive(false)}
                >
                  Cancel
                </UIButton>
              </div>
            </div>
          </UIDialog>
          <UIDialog active={makeOffer} setActive={setMakeOffer}>
            <div className='flex flex-col gap-5 items-center'>
              <UIHtag tag='h2'>Check Out</UIHtag>
              <div className=' border-y border-gray-light p-8 '>
                <PictureItem
                  pictureImage={nftItem.metadata.image}
                  pictureName={nftItem.metadata.name}
                  className='w-52 h-52 mx-auto mb-5'
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
          </UIDialog>
        </>
      )}
    </CustomContainer>
  );
};
