import { ReactComponent as Icons } from '../assets/icons/Logo.svg';
import { useDarkMode } from '../hooks/useDarkMode';

export const Logo = () => {
  const [_, toggleDarkMode] = useDarkMode();
  return (
    <div
      className='flex gap-1 items-center shrink-0 cursor-pointer'
      onClick={toggleDarkMode}
    >
      <Icons className={`stroke-white dark:stroke-dark`} />
      <span className=''>CryptoKet</span>
    </div>
  );
};
