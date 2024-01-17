import { Button, Modal, Space } from 'antd';
import { FC } from 'react';
import { IReservation } from '../../../types/Types';

interface ModalProps {
  option: string;
  data?: IReservation;
}

export const InfoModal: FC<ModalProps> = ({ option, data }) => {
  const success = () => {
    Modal.success({
      content: 'some messages...some messages...',
    });
  };

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };

  return (
    <Space wrap>
      {option === 'success' ? (
        <Button onClick={success}>Success</Button>
      ) : (
        <Button onClick={error}>Error</Button>
      )}
    </Space>
  );
};
