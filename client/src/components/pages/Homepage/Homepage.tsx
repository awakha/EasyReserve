import { FC, useEffect, useState } from 'react';
import { CustomLayout } from '../../Layout/CustomLayout';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
import { RestaurantItem } from '../../UI/RestaurantItem/RestaurantItem';
import axios from 'axios';
import { RecommendContainer } from '../../UI/RecommendContainer/RecommendContainer';
import authAxiosInstance from '../../../http';
import AuthService from '../../../services/AuthService';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../../store/slices/authSlice';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import { FC, useEffect, useState } from 'react';
import { CustomLayout } from '../../Layout/CustomLayout';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
import { RestaurantItem } from '../../UI/RestaurantItem/RestaurantItem';
import axios from 'axios';
import { RecommendContainer } from '../../UI/RecommendContainer/RecommendContainer';
import { useDispatch } from 'react-redux';

export const Homepage: FC = () => {
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();

  const places = ['Moscow', 'Paris', 'Milan'];

  const getData = async () => {
    const response = await axios.get('http://localhost:3000/api');
    setCities(response.data);
  };

  const test = async () => {
    // AuthService.login();
    authAxiosInstance.get('/');
    try {
      await dispatch(loginAsync('test@test.com', '123456A'));

      console.log('Успешный вход в систему!');
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };

  useEffect(() => {
    test();
  }, []);

  useEffect(() => {
    getData();
  }, []);

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
