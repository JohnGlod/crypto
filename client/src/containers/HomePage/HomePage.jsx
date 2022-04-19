import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GridContainer } from '../GridContainer';
import { WellcomeBanner } from '../../components/WellcomeBanner';
import { useIPFS } from '../../hooks/useIPFS';
import { useMoralisWeb3Api } from 'react-moralis';

import { getNFTCollections } from '../../store/redusers/selectors/getNFTCollections/getNFTCollections';
import { selectSearchNFT } from '../../store/redusers/selectors/selectSearchNFT/selectSearchNFT';
import { changeOffset } from '../../store/redusers/NFTCollectionsSlice';
export const HomePage = () => {
  const dispatch = useDispatch();
  const Web3Api = useMoralisWeb3Api();
  const { resolveLink } = useIPFS();

  const searchNFT = useSelector(selectSearchNFT);
  const offset = useSelector((state) => state.NFTCollections.offset);

  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [NFTBalance, setNFTBalance] = useState([]);

  const updateItems = () => {
    dispatch(changeOffset());
  };

  const fetchSearchNFTs = async ({
    q = 'Sleepless Streets',
    limit = 8,
    offset = 0,
    filter,
  }) => {
    try {
      const data = await Web3Api.token.searchNFTs({
        q,
        limit,
        offset,
        filter,
      });

      if (data?.result) {
        const NFTs = data.result;
        console.log(NFTs);
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
    fetchSearchNFTs({
      q: searchNFT ?? 'Sleepless Streets',
      filter: 'name',
      offset,
    });
  }, [offset, searchNFT]);

  return (
    <main className='w-full p-5 flex flex-col gap-5 items-center max-w-screen-2xl mx-auto'>
      <WellcomeBanner title='Discover, collect, and sell extraordinary NFTs' />
      <section className='pb-10 flex flex-col'>
        <h2 className='font-semibold text-3xl mb-8 dark:text-white'>
          Hot Bids
        </h2>
        <GridContainer NFTBalance={NFTBalance} fetchSuccess={fetchSuccess} />
        <button
          className='w-full m-auto md:w-1/4 rounded-lg border-red border px-8 py-2 text-red font-bold mx-auto mt-10 hover:bg-red hover:text-white transaction-all easy-in-out duration-500 '
          onClick={updateItems}
          disabled={false}
        >
          Load more
        </button>
      </section>
      {/* <Popup /> */}
    </main>
  );
};
