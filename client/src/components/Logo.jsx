import { Link } from 'react-router-dom';

export const Logo = (props) => {
  const { theme = 'Dark' } = props;
  return (
    <Link to={'/'}>
      <div className='flex gap-1 items-center shrink-0 cursor-pointer'>
        <img className='' src={`/images/logo/${theme}.svg`} alt='CryptoKet' />
        <span className=''>CryptoKet</span>
      </div>
    </Link>
  );
};
