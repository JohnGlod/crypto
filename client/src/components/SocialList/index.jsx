import { IconInst } from './IconInst';
import { IconTgm } from './IconTgm';
import { IconTwitter } from './IconTwitter';
import { IconDiscord } from './IconDiscord';

import { useDarkMode } from '../../hooks/useDarkMode';

export const SocialList = () => {
  const [isDarkMode] = useDarkMode();
  let colorIcons = isDarkMode ? 'white' : 'black';
  return (
    <ul className='flex gap-5 py-4'>
      <li >
        <a href='#'>
          <IconInst fill={colorIcons} />
        </a>
      </li>
      <li>
        <a href='#'>
          <IconTwitter fill={colorIcons} />
        </a>
      </li>
      <li>
        <a href='#'>
          <IconTgm fill={colorIcons} />
        </a>
      </li>
      <li>
        <a href='#'>
          <IconDiscord fill={colorIcons} />
        </a>
      </li>
    </ul>
  );
};
