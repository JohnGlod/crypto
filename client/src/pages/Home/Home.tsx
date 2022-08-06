import { useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { useSearchParams } from 'react-router-dom';

import { useIPFS } from '../../hooks/useIPFS';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  selectCursor,
  selectNFTCollections,
} from '../../store/features/NFTcollections/slice';

import {
  setNFTCollections,
  ActionResult,
} from '../../store/features/NFTcollections/slice';

import { GridContainer } from '../../containers';
import { WellcomeBanner } from '../../components/WellcomeBanner';
import { UIHtag, UIButton } from '../../components/UI-Kit';

export const Home = () => {
  const dispatch = useAppDispatch();
  const Web3Api = useMoralisWeb3Api();
  const { resolveLink } = useIPFS();

  const [searchParams] = useSearchParams();
  const searchNFT = searchParams.get('q') || 'Sleepless Streets';

  const NFTBalance = useAppSelector(selectNFTCollections);
  const cursor = useAppSelector(selectCursor);

  const [fetchSuccess, setFetchSuccess] = useState(false);

  const [disableUpdate, setDisableUpdate] = useState(false);
  interface IOptionsParams {
    q: string;
    cursor?: string | false;
    limit?: number;
  }

  const getSearchNFTs = async (options: IOptionsParams) => {
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
        console.log('getSearchNFTs', NFTs);
        const response: ActionResult = { result: NFTs, cursor: data.cursor };
        dispatch(setNFTCollections(response));
      }
    } catch (error) {
      throw new Error('Request SearchNFTs ended with an error');
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

        <GridContainer list={NFTBalance} loading={fetchSuccess} />
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
