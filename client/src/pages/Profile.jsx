import { useMoralis } from 'react-moralis';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Search } from '../components';
import { Select } from '../components';
import { UserProfile } from '../components';
import { GridContainer } from '../components';
import { CustomContainer } from '../components';

export const Profile = () => {
  const { user, setUserData, isUserUpdating } = useMoralis();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const items = useSelector((state) => state.items.items);
  const testSrc =
    'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg';
  const bannerSrc = false;

  const changeNameAcc = (data) => {
    if (data.trim() !== '') {
      setUserData({
        username: data,
      });
      /* react-form */
      reset();
    }
  };
  return (
    <section className='dark:text-white '>
      <UserProfile user={user} testSrc={testSrc} bannerSrc={bannerSrc} />
      <CustomContainer>
        <div className='hidden px-4 max-w-screen-lg w-full md:flex md:mt-10 justify-between gap-5'>
          <Search />
          <Select />
        </div>
        <div className='max-w-screen-lg flex flex-col'>
          <h3 className='font-semibold text-xl md:text-3xl dark:text-white mb-5'>
            Items
          </h3>
          <GridContainer items={items} />
        </div>
        <button className='w-full md:w-1/4 rounded-lg border-red border px-8 py-2 text-red font-bold mx-auto mt-10'>
          Load more
        </button>
      </CustomContainer>
    </section>
  );
};
