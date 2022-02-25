import { useMoralis } from 'react-moralis';
import { useSelector } from 'react-redux';
import { GridContainer } from '../components';
import { Search } from '../components/Search';
import { Select } from '../components/Select';

export const Profile = () => {
  const { user } = useMoralis();
  const items = useSelector((state) => state.items.items);
  const testSrc =
    'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg';
  const bannerSrc = false;
  return (
    <section className='dark:text-white'>
      <div className=''>
        <img
          src={
            bannerSrc
              ? bannerSrc
              : 'https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg'
          }
          alt='banner'
          className='w-full lg:h-[300px] object-cover object-center h-[200px]'
        />
      </div>
      <div className='w-full p-10 flex flex-col gap-5 items-center max-w-screen-2xl mx-auto'>
        <div className='rounded-full border-4 border-dark w-56 h-56 '>
          <img
            className='w-full h-full rounded-full object-cover object-center'
            src={testSrc}
            alt='profile'
          />
        </div>
        <h2 className='font-semibold text-center text-xl'>
          {user.getUsername()}
        </h2>
        <div className='mt-10 px-4 max-w-screen-lg w-full flex justify-between gap-5'>
          <Search />
          <Select />
        </div>
        <div className='max-w-screen-lg flex flex-col'>
          <h3 className='font-semibold text-xl dark:text-white mb-5'>Items</h3>
          <GridContainer items={items} />
          <button className='w-full md:w-6/12 rounded-lg border-red border px-8 py-2 text-red font-bold mx-auto mt-10'>
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};
