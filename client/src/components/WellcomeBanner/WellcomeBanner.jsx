import React from 'react';
import PropTypes from 'prop-types';
import styles from './WellcomeBanner.module.css'

export const WellcomeBanner = ({ title = '' }) => {
  return (
    <div
      className={styles.banner}
    >
      <span className='text-white text-3xl md:text-5xl font-bold w-3/4'>
        {title}
      </span>
    </div>
  );
};

WellcomeBanner.propTypes = {
  title: PropTypes.string,
};

