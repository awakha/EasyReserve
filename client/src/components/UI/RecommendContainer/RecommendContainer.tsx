import { Link } from 'react-router-dom';
import { FC, useState } from 'react';

import { RestaurantItem } from '../RestaurantItem/RestaurantItem';
import styles from './RecommendContainer.module.css';
import { IRestaurant } from '../../../types/Types';

interface IProps {
  city: string;
  restaurants: IRestaurant[];
}

export const RecommendContainer: FC<IProps> = ({ city, restaurants }) => {
  const [rests, setRests] = useState(restaurants.splice(0, 4));

  return (
    <div className={styles.recommend_container}>
      <div className={styles.recommend_header}>
        <h2>Popular restaurants in {city}</h2>
        <Link to={`/restaurants/${city}`}>
          <h3>See more</h3>
        </Link>
      </div>
      <div className={styles.rests_container}>
        {rests.map((rest) => (
          <Link to={`restaurants/${rest.id}`}>
            <RestaurantItem rest={rest} key={rest.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};
