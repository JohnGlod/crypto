import React from 'react';
import styles from './WellcomeBanner.module.css';

export interface IProps {
  title: string;
}

export const WellcomeBanner = ({ title = '' }: IProps): JSX.Element => {
  return (
    <div className={styles.banner}>
      <span className='text-white text-3xl md:text-5xl font-bold w-3/4'>
        {title}
      </span>
    </div>
  );
};
