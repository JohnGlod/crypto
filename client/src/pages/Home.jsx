import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GridContainer } from '../components';

import { fetchItems } from '../store/itemsSlice';
export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems());
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
        <h2 className='font-semibold text-3xl mb-8 dark:text-white'>Hot Bids</h2>
        <GridContainer items={items} />
      </section>
    </main>
  );
};
