import { Space, Button, Modal } from 'antd';
import { FC } from 'react';
import axios from 'axios';

import { ReservationData } from '../../../types/Types';
import styles from './Modal.module.css';

interface IModalProps {
  data: ReservationData;
}

export const ModalComponent: FC<IModalProps> = ({ data }) => {
  const [modal, setModal] = Modal.useModal();

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
      ),
      onOk() {
        bookingHandler();
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
