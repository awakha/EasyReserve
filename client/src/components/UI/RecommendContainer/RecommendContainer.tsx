import { Link } from 'react-router-dom';
import { FC, useState } from 'react';

import { RestaurantItem } from '../RestaurantItem/RestaurantItem';
import styles from './RecommendContainer.module.css';
import { IRestaurant } from '../../../types/Types';

interface IProps {
  cuisine: string;
  restaurants: IRestaurant[];
}

export const RecommendContainer: FC<IProps> = ({ cuisine, restaurants }) => {
  const rests = restaurants.slice(0, 5);

  return (
    <div className={styles.recommend_container}>
      <div className={styles.recommend_header}>
        <h2>Популярное в разделе: {cuisine}</h2>
      </div>
      <div className={styles.rests_container}>
        {rests.map((rest) => (
          <Link to={`restaurants/${rest.id}`} key={rest.id}>
            <RestaurantItem rest={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};
