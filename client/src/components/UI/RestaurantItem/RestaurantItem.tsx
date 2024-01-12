import { FC } from 'react';

import styles from './RestaurantItem.module.css';
import { IRestaurant } from '../../../types/Types';

interface IRestItemProps {
  rest: IRestaurant;
}
export const RestaurantItem: FC<IRestItemProps> = ({ rest }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        alt="example"
        src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg"
      />
      <div className={styles.info}>
        <span>CUISINE</span>
        <div className={styles.info_container}>
          <h2>REST NAME</h2>
          <p>9.2</p>
        </div>

        <p>$45 avg price</p>
      </div>
    </div>
  );
};
