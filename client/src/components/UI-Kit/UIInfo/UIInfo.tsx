import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { UIButton } from '../';

import { InfoProps } from './UIInfo.props';
import CatFail from './image/cat-fail.gif';

export const UIInfo = ({ infoTitle, infoText, className }: InfoProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-full py-5 px-2 h-auto gap-5',
        className
      )}
    >
      <img
        className='dark:border-4 rounded-lg max-w-[300px]'
        src={CatFail}
        alt='test'
      />
      <h5 className='font-semibold text-3xl'>{infoTitle}</h5>
      <p className='text-xl '>{infoText}</p>
      <UIButton
        size='full'
        appearance='primary'
        className='uppercase max-w-[200px]'
        onClick={() => navigate(-1)}
      >
        Come back
      </UIButton>
    </div>
  );
};
