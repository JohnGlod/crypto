import { ReactComponent as IconInst } from '../../assets/icons/inst.svg';
import { ReactComponent as IconTgm } from '../../assets/icons/tgm.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as IconDiscord } from '../../assets/icons/discord.svg';

import styles from './SocialList.module.css';

const ListItem = ({ children, data, url }) => {
  return (
    <li className='fill-black dark:fill-white hover:text-red ease-in-out transition-all duration-150'>
      <a href={url} className={styles.popup} data-content={data}>
        {children}
      </a>
    </li>
  );
};

const List = [
  {
    children: (
      <IconInst
        width={25}
        heigth={25}
      />
    ),
    data: 'Instagram — An organization recognized as extremist in the territory of the Russian Federation',
    url: '#!'
  },
  {
    children: (
      <IconTwitter
        width={25}
        heigth={25}
      />
    ),
    data: 'Twitter',
    url: '#!'
  },
  {
    children: (
      <IconTgm
        width={25}
        heigth={25}
      />
    ),
    data: 'Telegram',
    url: '#!'
  },
  {
    children: (
      <IconDiscord
        width={25}
        heigth={25}
      />
    ),
    data: 'Discord',
    url: '#!'
  },
];

export const SocialList = () => {
  return (
    <ul className='flex gap-5 py-4'>
      {
        List.map(({ children, data, url }, index) => (
          <ListItem key={index} children={children} data={data} url={url} />
        ))
      }
    </ul>
  );
};
