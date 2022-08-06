import cn from 'classnames';

import { ReactComponent as Icons } from './image/logo.svg';
import { LogoProps } from './UILogo.props';

export const UILogo = ({ theme, logoClick }: LogoProps) => (
  <div
    className='flex gap-1 items-center shrink-0 cursor-pointer basis-28'
    onClick={logoClick}
  >
    <Icons
      className={cn({
        'stroke-dark': theme === 'light',
        'stroke-white': theme === 'dark'
      })}
    />
    <span
      className={cn({
        'text-white': theme === 'dark',
        'text-dark': theme === 'light',
      })}
    >
      CryptoKet
    </span>
  </div>
);
