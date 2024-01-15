import { MobileOutlined } from '@ant-design/icons';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import { RestaurantItem } from '../../UI/RestaurantItem/RestaurantItem';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getRestaurants } from '../../../store/thunkActions';
import { CustomLayout } from '../../Layout/CustomLayout';
import { Loader } from '../../UI/Loader/Loader';

import styles from './Homepage.module.css';

export const Homepage: FC = () => {
  const dispatch = useAppDispatch();
  const { restaurants, isLoading } = useAppSelector((state) => state.rests);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const [cities, setCities] = useState([]);

  const places = ['Moscow', 'Paris', 'Milan'];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <CustomLayout>
      <img
        src="../../../public/home_img.jpg"
        alt="img"
        className={styles.home_img}
      />
      <div>
        <Button size="large">
          <MobileOutlined></MobileOutlined>
          <a href="https://t.me/EasyReserve_bot">TG</a>
        </Button>
      </div>
      {/* {cities.map((city) => (
        <RecommendContainer city={city} key={city.id} />
      ))} */}
      {places.map((city) => (
        <div className={styles.recommend_container}>
          <div className={styles.recommend_header}>
            <h2>Popular restaurants in {city}</h2>
            <Link to={`/restaurants/${city}`}>
              <h3>See more</h3>
            </Link>
          </div>
          <div className={styles.rests_container}>
            <RestaurantItem />
            <RestaurantItem />

            <RestaurantItem />

            <RestaurantItem />
          </div>
        </div>
      ))}
    </CustomLayout>
  );
};
