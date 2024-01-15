import { UserOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthService from '../../../services/AuthService';
import { selectUser, setUser } from '../../../store/slices/authSlice';
import styles from './Header.module.css';

export const Header: FC = () => {
  // get user form store
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
          <h2 className={styles.brand_name}>Home</h2>
        </Link>
        <Link to={'/restaurants'}>
          <h2 className={styles.brand_name}>Restaurants</h2>
        </Link>
        <Link to={'/about'}>
          <h2 className={styles.brand_name}>About</h2>
        </Link>
        <Link to={'/register'}>
          <h2 className={styles.brand_name}>Register</h2>
        </Link>
      </div>

      <div className={styles.profile_group}>
        <Link to={user ? '/profile' : '/login'}>
          <UserOutlined className={styles.icon} />
          <h2>{user?.username}</h2>
        </Link>

        {user ? (
          <>
            <h2>|</h2>
            <Button
              type="text"
              className={styles.logout_btn}
              size="small"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : null}
      </div>
    </Layout.Header>
  );
};
