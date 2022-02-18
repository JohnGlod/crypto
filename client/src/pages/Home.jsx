import { CardItem } from '../components';
export const Home = () => {
  return (
    <main className='w-full p-5 flex flex-col gap-5 items-center'>
      <div className={`banner-bg color-accent w-full md:w-2/4 rounded-lg py-8 px-8 font-bold min-h-[150px] md:min-h-[300px] flex items-center content-center`}>
        <h1 className='dark:text-white text-xl md:text-3xl lg:text-5xl'>
          Discover, collect, and sell <br />
          extraordinary NFTs
        </h1>
      </div>
      <div className='flex md:justify-evenly gap-5'>
        <CardItem />
        <CardItem />
      </div>
    </main>
  );
};
