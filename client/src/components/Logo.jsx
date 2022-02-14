import { useDarkMode } from '../hooks/useDarkMode';
export const Logo = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const logoSrc = isDarkMode
    ? 'images/logo/Dark.svg'
    : '/images/logo/Light.svg';
  return (
    <div
      className='flex gap-1 items-center shrink-0 cursor-pointer'
      onClick={toggleDarkMode}
    >
      <img className='' src={logoSrc} alt='CryptoKet' />
      <span className=''>CryptoKet</span>
    </div>
  );
};
