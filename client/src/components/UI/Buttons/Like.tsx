import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { FC, useEffect, useState } from 'react';

import styles from './Like.module.css';
import axios from 'axios';
import { useAppSelector } from '../../../store/hooks';
import authorizedAxiosInstance from '../../../http';

export const Like: FC = ({ id }) => {
  const [faves, setFaves] = useState<string[]>([]);
  const user = useAppSelector((state) => state.auth.user);

  const fetchFaves = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/faves');
      setFaves(response.data.faves);
    } catch (err) {
      console.log('While fetching faves an error occurred', err.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchFaves();
    }
  }, []);

  // get user and get his faves rests
  const addToFaves = async () => {
    try {
      const response = await authorizedAxiosInstance.patch(`/faves/${id}`);

      if (response.data.status === 200) {
        faves.indexOf(id) > -1
          ? setFaves((prev) => prev.filter((el) => el !== id))
          : setFaves((prev) => [...prev, id]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <button
      className={styles.like_btn}
      onClick={addToFaves}
      disabled={user ? false : true}
    >
      {faves.indexOf(id) > -1 ? (
        <HeartFilled className={styles.icon} />
      ) : (
        <HeartOutlined className={styles.icon} />
      )}
    </button>
  );
};
