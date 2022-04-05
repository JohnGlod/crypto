import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GridContainer, Popup } from '../components';
import { useIPFS } from '../hooks/useIPFS';
import { useMoralisWeb3Api } from 'react-moralis';
import { getNFTCollections } from '../store/redusers/selectors/getNFTCollections/getNFTCollections';

export const Home = () => {
  /*   const dispatch = useDispatch();
  const items = useSelector(getNFTCollections); 
  */
  const { resolveLink } = useIPFS();

  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [NFTBalance, setNFTBalance] = useState([]);
  const Web3Api = useMoralisWeb3Api();


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
            NFT.metadata.image = resolveLink(NFT.metadata?.image) ?? resolveLink(NFT.metadata?.image_url);
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
    fetchSearchNFTs({
      q: 'Lover',
      filter: 'name',
      limit: 20,
      offset: 1000,
    });
  }, []);

  return (
    <main className='w-full p-5 flex flex-col gap-5 items-center max-w-screen-2xl mx-auto'>
      <div
        className={`banner-bg color-accent w-full md:w-2/4 rounded-lg p-8 font-bold min-h-[150px] md:min-h-[300px] flex items-center content-center`}
      >
        <h1 className='dark:text-white text-xl md:text-3xl lg:text-5xl'>
          Discover, collect, and sell <br />
          extraordinary NFTs
        </h1>
      </div>
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
