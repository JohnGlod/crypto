import { useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { useParams } from 'react-router-dom';
import { Moralis } from 'moralis';
import { useIPFS } from '../../hooks/useIPFS';
import { Avatar } from '../../components/Avatar';
import { Tabs } from '../../components/Tabs';
import { Like } from '../../components/Like';
import { Button } from '../../components/Button';
import { ItemsLinkBack } from '../../components/ItemsLinkBack';
import { CustomContainer } from '../CustomContainer';

export const ItemPage = () => {
  const Web3Api = useMoralisWeb3Api();
  const { resolveLink } = useIPFS();
  const param = useParams();
  const [nftItem, setNftItem] = useState(null);

  const openModal = () => {
    console.log('open');
  };

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
    <CustomContainer style='items-center flex-col lg:flex-row '>
      {nftItem && (
        <>
          <ItemsLinkBack />
          <div className='grow lg:basis-3/5'>
            <img
              className='w-3/4 h-auto rounded-lg object-cover object-center  lg:basis-full'
              src={nftItem.metadata.image ?? nftItem.metadata.image_url}
              alt={nftItem.metadata.name}
            />
          </div>
          <div className='flex flex-col w-full gap-5 px-5 basis-4/12 border-l-2 border-gray-light'>
            <div className='flex items-center gap-5'>
              <h2 className='text-3xl font-semibold'>
                {nftItem.metadata.name}
              </h2>
              <Like numberOfLikes={92} rounded={true} />
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
            <div className='flex gap-5 items-center justify-between'>
              <Button
                cName='color-accent text-white font-semibold w-[200px]'
                func={openModal}
              >
                Buy for {10} ETH
              </Button>
              <Button
                cName='border border-red text-red lg:ml-[20px] font-semibold w-[200px]'
                func={openModal}
              >
                Make Offer
              </Button>
            </div>
          </div>
        </>
      )}
    </CustomContainer>
  );
};
