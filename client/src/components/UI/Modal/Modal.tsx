import { Space, Button, Modal } from 'antd';
import { FC, useState } from 'react';
import axios from 'axios';

import { ReservationData } from '../../../types/Types';
import styles from './Modal.module.css';
import { Login } from '../../pages/auth/Login';
import { useNavigate } from 'react-router-dom';

interface IModalProps {
  data: ReservationData;
}

export const ModalComponent: FC<IModalProps> = ({ data }) => {
  const [modal, setModal] = Modal.useModal();
  const navigate = useNavigate();

  const bookingHandler = async (): Promise<void> => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/booking/`,
        data
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const confirm = () => {
    modal.confirm({
      content: (
        <>
          {data.userId ? (
            <div className={styles.main}>
              <div className={styles.reservation}>
                <h2>RESERVATION</h2>
                <h2>•</h2>
                <h2>{data.restaurant}</h2>
              </div>

              <p>{data.date}</p>
              <p>{data.startTime}</p>
              <p>{data.guestsCount}</p>
            </div>
          ) : (
            <h1>You have to login</h1>
          )}
        </>
      ),
      onOk() {
        data.userId ? bookingHandler() : navigate('/login');
      },
      onCancel() {},
    });
  };

  return (
    <>
      <Space wrap>
        <Button onClick={confirm} className={styles.btn}>
          reserve
        </Button>
      </Space>
      {setModal}
    </>
  );
};
