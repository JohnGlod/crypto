import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { Search } from './Search';

export const Header = () => {
  return (
    <header className='w-full border-solid border-b border-[#2D2E36]'>
      <div className='flex justify-between items-center bg-dark p-5'>
        <Logo />
        <Search />
        <Navbar />
      </div>
    </header>
  );
};
