import { Button, Modal, Space } from 'antd';
import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import authorizedAxiosInstance from '../../../http';
import { ReservationData } from '../../../types/Types';
import styles from './Modal.module.css';

interface IModalProps {
  data: ReservationData;
}

export const ModalComponent: FC<IModalProps> = ({ data }) => {
  const [modal, setModal] = Modal.useModal();
  const navigate = useNavigate();

  const bookingHandler = async () => {
    try {
      const response = await authorizedAxiosInstance.post(`/booking`, data);
      if (response.status === 200) {
        navigate('/profile');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const confirm = () => {
    modal.confirm({
      title: 'БРОНИРОВАНИЕ',
      content: (
        <>
          {data.userId ? (
            <p>
              Пожалуйста, ознакомьтесь с информацией ниже и подтвердите
              бронирование <br />
              Ресторан: {data.restaurant}
              <br />
              Дата: {data.date}
              <br />
              Время: {data.startTime}
              <br />
              Количество гостей: {data.guestsCount}
            </p>
          ) : (
            <p>Войдите в систему или зарегистрируйтесь</p>
          )}
        </>
      ),
      onOk() {
        data.userId ? bookingHandler() : navigate('/login');
      },
    });
  };

  return (
    <>
      <Space wrap>
        <Button onClick={confirm} className={styles.btn}>
          зарезервировать
        </Button>
      </Space>
      {setModal}
    </>
  );
};
