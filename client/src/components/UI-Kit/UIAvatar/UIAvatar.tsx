import cn from 'classnames';

import { AvatarProps } from './UIAvatar.props';

export const UIAvatar = ({
  avatarAlt,
  avatarSize,
  avatarSrc,
  avatarClick,
}: AvatarProps) => (
  <div
    className={cn({
      'w-32 h-32 lg:w-56 lg:h-56 border-4 ': avatarSize === 'medium',
      'w-[50px] h-[50px] border-2': avatarSize === 'small',
      'rounded-full border-dark dark:border-white': true,
    })}
    onClick={avatarClick}
  >
    <img
      className='w-full h-full rounded-full object-cover object-center'
      src={avatarSrc}
      alt={avatarAlt}
    />
  </div>
);
