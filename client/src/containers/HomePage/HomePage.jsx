import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GridContainer } from '../GridContainer';
import { WellcomeBanner } from '../../components/WellcomeBanner';
import { useIPFS } from '../../hooks/useIPFS';
import { useMoralisWeb3Api } from 'react-moralis';
import { getNFTCollections } from '../../store/redusers/selectors/getNFTCollections/getNFTCollections';

export const HomePage = () => {
  /*   const dispatch = useDispatch();
  const items = useSelector(getNFTCollections); 
  */
  const { resolveLink } = useIPFS();

  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [NFTBalance, setNFTBalance] = useState([]);
  const Web3Api = useMoralisWeb3Api();
  const updateOffset = (number) => Number(number) + 20;
  const createOptions = ({ search, limit = 20, offset }) => {
    const newOffset = updateOffset(offset);
    return {
      q: search,
      limit,
      offset: newOffset,
    };
  };
  const options = {
    q: 'Sleepless Streets',
    limit: 8,
    offset: 0,
    filter: 'name',
  };
  console.log(fetchSuccess);
  const fetchSearchNFTs = async (options) => {
    try {
      const data = await Web3Api.token.searchNFTs(options);
      if (data?.result) {
        const NFTs = data.result;
        /* console.log(NFTs);  При некорректном запросе возвращает именно [] */
        setFetchSuccess(true);
        for (const NFT of NFTs) {
          if (NFT?.metadata) {
            NFT.metadata = JSON.parse(NFT.metadata);
            NFT.metadata.image =
              resolveLink(NFT.metadata?.image) ??
              resolveLink(NFT.metadata?.image_url);
          }
        }
        setNFTBalance(NFTs);
        return NFTs;
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSearchNFTs(options);
  }, []);

  return (
    <main className='w-full p-5 flex flex-col gap-5 items-center max-w-screen-2xl mx-auto'>
      <WellcomeBanner title='Discover, collect, and sell extraordinary NFTs'/>
      <section className='pb-10'>
        <h2 className='font-semibold text-3xl mb-8 dark:text-white'>
          Hot Bids
        </h2>
        <GridContainer NFTBalance={NFTBalance} fetchSuccess={fetchSuccess} />
      </section>
      {/* <Popup /> */}
    </main>
  );
};
