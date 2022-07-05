import cn from 'classnames';

import { ButtonProps } from './UIButton.props';

export const UIButton = ({
  rounded = 'rounded',
  size = 'normal',
  onClick,
  className,
  children,
  type = 'button',
  disabled = false,
  appearance,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={cn(
      {
        'inline-block hover:shadow-md transition duration-500 ease-in-out font-semibold':
          true,
        'text-white bg-gradient-to-r from-fireflies hover:bg-gradient-to-l via-red to-orange hover:text-white':
          appearance === 'primary',
        'border border-red text-red hover:border-blue hover:text-blue':
          appearance === 'secondary',
        'py-2 w-full': size === 'full',
        'py-2 px-7': size === 'normal',
        'rounded-lg': rounded === 'rounded',
        'bg-none bg-gray-light text-red': disabled === true,
      },
      className
    )}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
