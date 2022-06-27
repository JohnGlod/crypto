import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMoralisWeb3Api } from 'react-moralis';
import { useSearchParams } from 'react-router-dom';

import { useIPFS } from '../../hooks/useIPFS';

import { selectNFTCollections } from '../../store/redusers/selectors/selectNFTCollections/selectNFTCollections';
import { selectCursor } from '../../store/redusers/selectors/selectCursor/selectCursor';

import { setNFTCollections } from '../../store/redusers/NFTCollectionsSlice';

import { GridContainer } from '../GridContainer';
import { WellcomeBanner } from '../../components/WellcomeBanner';

export const HomePage = () => {
  const dispatch = useDispatch();
  const Web3Api = useMoralisWeb3Api();
  const { resolveLink } = useIPFS();

  const [searchParams] = useSearchParams();
  const searchNFT = searchParams.get('q') || 'Sleepless Streets';

  const NFTBalance = useSelector(selectNFTCollections);
  const cursor = useSelector(selectCursor);

  const [fetchSuccess, setFetchSuccess] = useState(false);

  const [disableUpdate, setDisableUpdate] = useState(false);

  const getSearchNFTs = async (options) => {
    try {
      setDisableUpdate(true);
      const data = await Web3Api.token.searchNFTs(options);
      if (data?.result) {
        const NFTs = data.result;
        setFetchSuccess(true);
        NFTs.forEach((NFT) => {
          if (NFT?.metadata) {
            NFT.metadata = JSON.parse(NFT.metadata);
            NFT.metadata.image =
              resolveLink(NFT.metadata?.image) ??
              resolveLink(NFT.metadata?.image_url);
          }
        });
        dispatch(setNFTCollections({ result: NFTs, cursor: data.cursor }));
      }
    } catch (error) {
      throw new Error('Request SearchNFTs ended with an error', error);
    } finally {
      setDisableUpdate(false);
    }
  };

  const updateNFTBalance = () => {
    if (!cursor) {
      setDisableUpdate(true);
    }
    getSearchNFTs({ q: searchNFT, cursor, limit: 8 });
  };

  useEffect(() => {
    getSearchNFTs({ q: searchNFT, limit: 8 });
  }, [searchNFT]);

  return (
    <main className='w-full p-5 flex flex-col gap-5 items-center max-w-screen-2xl mx-auto'>
      <WellcomeBanner title='Discover, collect, and sell extraordinary NFTs' />
      <section className='pb-10 flex flex-col'>
        <h2 className='font-semibold justify-self-start text-3xl mb-8 dark:text-white'>
          Hot Bids
        </h2>
        <GridContainer NFTBalance={NFTBalance} fetchSuccess={fetchSuccess} />
        <button
          className='w-full m-auto  max-w-[200px] rounded-lg border-red border px-8 py-2 text-red font-bold mx-auto mt-10 hover:bg-red hover:text-white transaction-all easy-in-out duration-500 disabled:bg-gray-light hover:disabled:text-red'
          onClick={updateNFTBalance}
          disabled={disableUpdate}
        >
          Load more
        </button>
      </section>
      {/* <Popup /> */}
    </main>
  );
};
