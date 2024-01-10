import { FC } from 'react';

import styles from './RestaurantItem.module.css';

export const RestaurantItem: FC = ({ rest }) => {
  console.log('REEEEEEEEEST', rest);
  return (
    <div className={styles.card}>
      <img className={styles.img} alt="example" src={rest.images[0]} />
      <div className={styles.info}>
        <span>CUISINE</span>
        <div className={styles.info_container}>
          <h2>{rest.name}</h2>
          <p>9.2</p>
        </div>

        <p>$45 avg price</p>
      </div>
    </div>
  );
};
