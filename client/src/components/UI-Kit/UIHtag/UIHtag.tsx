import cn from 'classnames';

import { HtagProps } from './UIHtag.props';

export const UIHtag = ({ tag, children, className, theme }: HtagProps) => {
  switch (tag) {
    case 'h1':
      return (
        <h1
          className={cn(
            'text-3xl font-semibold',
            { 'text-white': theme === 'dark', 'text-dark': theme === 'light' },
            className
          )}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={cn(
            'text-2xl font-semibold',
            { 'text-white': theme === 'dark', 'text-dark': theme === 'light' },
            className
          )}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={cn(
            'text-xl font-semibold',
            { 'text-white': theme === 'dark', 'text-dark': theme === 'light' },
            className
          )}
        >
          {children}
        </h3>
      );
    default:
      <></>;
      break;
  }
};
