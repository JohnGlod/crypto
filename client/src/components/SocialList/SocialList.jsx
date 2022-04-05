import { ReactComponent as IconInst } from '../../assets/icons/inst.svg';
import { ReactComponent as IconTgm } from '../../assets/icons/tgm.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as IconDiscord } from '../../assets/icons/discord.svg';

export const SocialList = () => {
  return (
    <ul className='flex gap-5 py-4'>
      <li>
        <a
          href='#!'
          className='icons-popup hover:text-white dark:hover:text-red'
          data-content='Instagram — An organization recognized as extremist in the territory of the Russian Federation '
        >
          <IconInst
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white hover:text-red`}
          />
        </a>
      </li>
      <li>
        <a
          href='#!'
          className='icons-popup hover:text-white dark:hover:text-red'
          data-content='Twitter'
        >
          <IconTwitter
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white hover:text-red `}
          />
        </a>
      </li>
      <li>
        <a
          href='#!'
          className='icons-popup hover:text-white dark:hover:text-red'
          data-content='Telegram'
        >
          <IconTgm
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white hover:text-red `}
          />
        </a>
      </li>
      <li>
        <a
          href='#!'
          className='icons-popup hover:text-white dark:hover:text-red'
          data-content='Discord'
        >
          <IconDiscord
            width={25}
            heigth={25}
            className={`fill-black dark:fill-white  hover:text-red`}
          />
        </a>
      </li>
    </ul>
  );
};
