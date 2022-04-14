import { Link, useLocation } from 'react-router-dom';

export const NotFoundPage = () => {
  let location = useLocation()

  return (
    <div className='flex flex-col w-full  items-center h-screen bg-[#3B82F6]'>
      <div className='m-auto text-center text-white flex flex-col items-center justify-center max-w-screen-2xl px-4'>
        <p className='text-9xl font-bold'>404</p>
        <span className='text-3xl'>Oops, this page cannot be found at the given URL — <i className='font-bold break-all '>{location.pathname}</i> !</span>
        <div className='arrow flex'></div>
        <button className='rounded-lg py-2 px-8 outline focus:outline-none hover:bg-red focus:ring-0 transition duration-150 ease-in-out'>
          <Link to='/'>Go Home</Link>
        </button>
      </div>
    </div>
  );
};
