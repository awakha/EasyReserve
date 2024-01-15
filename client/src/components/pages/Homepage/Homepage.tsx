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
import client from '../../../http/client';
import { RecommendContainer } from '../../UI/RecommendContainer/RecommendContainer';

export const Homepage: FC = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchData = async () => {
    try {
      const response = await client.get('/restaurants/main');
      setData(response.data.data);
      setCities(response.data.cities);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dispatch(getRestaurants());
    fetchData();
  }, [dispatch]);

  if (!data || !cities) {
    return <Loader />;
  }

  return (
    <CustomLayout>
      <img
        src="../../../public/home_img.jpg"
        alt="img"
        className={styles.home_img}
      />
      {/* <div>
        <Button size="large">
          <MobileOutlined></MobileOutlined>
          <a href="https://t.me/EasyReserve_bot">TG</a>
        </Button>
      </div> */}
      {cities.map((city) => (
        <RecommendContainer
          city={city}
          restaurants={data[city]}
          key={`${city}-${data[city].length}`}
        />
      ))}
    </CustomLayout>
  );
};
