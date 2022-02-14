import { IconInst } from './IconInst';
import { IconTgm } from './IconTgm';
import { IconTwitter } from './IconTwitter';
import { IconDiscord } from './IconDiscord';

export const SocialList = () => {
  return (
    <ul className='flex gap-5 py-4'>
      <li>
        <a href='#'>
          <IconInst />
        </a>
      </li>
      <li>
        <a href='#'>
          <IconTwitter />
        </a>
      </li>
      <li>
        <a href='#'>
          <IconTgm />
        </a>
      </li>
      <li>
        <a href='#'>
          <IconDiscord />
        </a>
      </li>
    </ul>
  );
};
