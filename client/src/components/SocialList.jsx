import { ReactComponent as IconInst } from './../assets/icons/inst.svg';
import { ReactComponent as IconTgm } from './../assets/icons/tgm.svg';
import { ReactComponent as IconTwitter } from './../assets/icons/twitter.svg';
import { ReactComponent as IconDiscord } from './../assets/icons/discord.svg';

export const SocialList = () => {
  return (
    <ul className='flex gap-5 py-4'>
      <li>
        <a href='#!'>
          <IconInst
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white`}
          />
        </a>
      </li>
      <li>
        <a href='#!'>
          <IconTwitter
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white `}
          />
        </a>
      </li>
      <li>
        <a href='#!'>
          <IconTgm
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white`}
          />
        </a>
      </li>
      <li>
        <a href='#!'>
          <IconDiscord
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white`}
          />
        </a>
      </li>
    </ul>
  );
};
