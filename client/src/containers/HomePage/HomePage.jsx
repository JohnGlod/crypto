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
import { UIHtag, UIButton } from '../../components/UI-Kit';

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
      console.log('getSearchNFTs');
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
    <main className='w-full p-5 flex flex-col gap-5 items-center max-w-screen-2xl mx-auto min-h-screen'>
      <WellcomeBanner>
        Discover, collect, and sell extraordinary NFTs
      </WellcomeBanner>
      <section className='pb-10 flex flex-col'>
        <UIHtag tag='h1' className='mb-8 dark:text-white'>
          Hot Bids
        </UIHtag>
        <GridContainer NFTBalance={NFTBalance} fetchSuccess={fetchSuccess} />
        <UIButton
          onClick={updateNFTBalance}
          disabled={disableUpdate}
          appearance='primary'
          size='full'
          className='mt-10 m-auto lg:w-1/2'
        >
          Load more
        </UIButton>
      </section>
    </main>
  );
};
