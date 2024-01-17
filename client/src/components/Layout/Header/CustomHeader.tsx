import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { FC } from 'react';

import { selectUser, setUser } from '../../../store/slices/authSlice';
import AuthService from '../../../services/AuthService';
import styles from './Header.module.css';

export const Header: FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AuthService.logout();
    dispatch(setUser(null));
  };

  return (
    <Layout.Header className={styles.header}>
      <Link to={'/'}>
        <h1 className={styles.brand_name}>EasyReserve</h1>
      </Link>

      <div className={styles.link_group}>
        <Link to={'/'}>
          <h2 className={styles.brand_name}>Главная</h2>
        </Link>
        <Link to={'/restaurants'}>
          <h2 className={styles.brand_name}>Рестораны</h2>
        </Link>
        <Link to={'/about'}>
          <h2 className={styles.brand_name}>О нас</h2>
        </Link>
      </div>

      <div className={styles.profile_group}>
        <Link to={user ? '/profile' : '/register'}>
          <h2>{user ? user?.username : 'Зарегистрироваться'}</h2>
        </Link>
        <h2>|</h2>
        <Link to={'/login'}>
          {user ? (
            <Button
              type="text"
              className={styles.logout_btn}
              size="small"
              onClick={handleLogout}
            >
              Выйти
            </Button>
          ) : (
            <h2>Войти</h2>
          )}
        </Link>
      </div>
    </Layout.Header>
  );
};
