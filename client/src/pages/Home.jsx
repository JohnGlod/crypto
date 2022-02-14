import { Card } from '../components';
export const Home = () => {
  return (
    <main className='p-5 flex flex-col gap-5 items-center'>
      <div className='color-accent w-4/5 rounded-lg py-8 px-5 font-bold text-3xl '>
        <h1 className=''>Discover, collect, and sell <br></br>extraordinary NFTs</h1>
      </div>
      <div className='flex md:justify-evenly'>
        <Card />
        <Card />
      </div>
    </main>
  );
};
