import { Button, Modal, Space } from 'antd';
import { FC } from 'react';

import { ReservationData } from '../../../types/Types';
import authorizedAxiosInstance from '../../../http';
import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';

interface IModalProps {
  data: ReservationData;
}

export const ModalComponent: FC<IModalProps> = ({ data }) => {
  const [modal, setModal] = Modal.useModal();
  const navigate = useNavigate();

  const bookingHandler = async (): Promise<void> => {
    try {
      const response = await authorizedAxiosInstance.post(`/booking`, data);
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
