import { FC } from 'react';
import styles from './RecommendContainer.module.css';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';
import { Link } from 'react-router-dom';

// interface RecommendContainerProps {}

export const RecommendContainer: FC = ({ city }) => {
  return (
    <div className={styles.recommend_container}>
      <div className={styles.recommend_header}>
        <h2>Popular restaurants in {city}</h2>
        <Link to={`/restaurants/${city}`}>
          <h3>See more</h3>
        </Link>
      </div>
      <div className={styles.rests_container}>
        {/* {city.Restaurants.map((rest) => {
          <RestaurantItem rest={rest} />;
        })} */}
      </div>
    </div>
  );
};
