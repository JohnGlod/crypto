import React from 'react';
import { useNavigate } from 'react-router-dom';

// @ts-ignore
import { Button } from '../Button';

import CatFail from './image/cat-fail.gif';

export interface IInfo {
  infoTitle: string;
  infoText: string;
}
export const Info = ({ infoTitle, infoText }: IInfo): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center w-full py-5 px-2 h-auto gap-5'>
      <img
        className='dark:border-4 rounded-lg max-w-[300px]'
        src={CatFail}
        alt='test'
      />
      <h5 className='font-semibold text-3xl'>{infoTitle}</h5>
      <p className='text-xl '>{infoText}</p>
      <Button
        cName='color-accent w-full max-w-[200px] text-white font-bold uppercase'
        func={() => navigate(-1)}
        type='button'
      >
        Come back
      </Button>
    </div>
  );
};
