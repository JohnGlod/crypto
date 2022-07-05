import { WellcomeBannerProps } from "./WellcomeBanner.props";

import styles from './WellcomeBanner.module.css';

export const WellcomeBanner = ({ children }: WellcomeBannerProps) => (
  <div className={styles.banner}>
    <span className='text-white text-3xl md:text-5xl font-bold w-3/4'>
      {children}
    </span>
  </div>
);
