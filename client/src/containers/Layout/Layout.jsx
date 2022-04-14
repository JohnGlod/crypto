import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export const Layout = () => {
  return (
    <div className='bg-white dark:bg-dark min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
