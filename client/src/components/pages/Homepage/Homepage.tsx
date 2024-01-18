import { FC, useEffect, useState } from 'react';

import { useAppDispatch } from '../../../store/hooks';
import { getRestaurants } from '../../../store/thunkActions';
import { CustomLayout } from '../../Layout/CustomLayout';
import { Loader } from '../../UI/Loader/Loader';
import MainWords from '../../mainWords/MainWords';
import client from '../../../http/client';
import { RecommendContainer } from '../../UI/RecommendContainer/RecommendContainer';
import styles from './Homepage.module.css';

export const Homepage: FC = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  const fetchData = async () => {
    try {
      const response = await client.get('/restaurants/main');
      setData(response.data.data);
      setCuisines(response.data.cuisine);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dispatch(getRestaurants());
    fetchData();
  }, [dispatch]);

  if (!data || !cuisines) {
    return <Loader />;
  }

  return (
    <CustomLayout>
      <MainWords />
      <div className={styles.bordered_container}>
        <p>
          Если хочешь посетить любимый ресторан в ближайшие 3 дня можешь
          воспользоваться нашим ботом помощником
        </p>
        <div className={styles.tg_link}>
          <a
            className={styles.bright_link}
            href="https://t.me/EasyReserve_bot"
            target="_blank"
          >
            Чат для брони ресторана
          </a>
        </div>
      </div>

      {cuisines.map((cuisine) => (
        <RecommendContainer
          cuisine={cuisine}
          restaurants={data[cuisine]}
          key={`${cuisine}-${data[cuisine].length}`}
        />
      ))}
      {/* </div> */}
    </CustomLayout>
  );
};
