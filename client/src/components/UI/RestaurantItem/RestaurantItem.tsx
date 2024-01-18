import { FC } from 'react';

import styles from './RestaurantItem.module.css';
import { IRestaurant } from '../../../types/Types';

interface IRestItemProps {
  rest: IRestaurant;
}
export const RestaurantItem: FC<IRestItemProps> = ({ rest }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} alt="example" src={`${rest.images[0]}`} />
      <div className={styles.info}>
        <span>{rest.cuisine}</span>
        <div className={styles.info_container}>
          <h2>{rest.name}</h2>
          {rest.avgScore ? <p>{Number(rest.avgScore).toFixed(2)}/5</p> : null}
        </div>
      </div>
    </div>
  );
};
