import { FC } from 'react';
import { Space, Button } from 'antd';

type ModalProps = {
  date: string;
  startTime: string;
  guestsCount: number;
  restId: number;
  userId: number;
};

export const Modal: FC<ModalProps> = ({ data }) => {
  const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <Space wrap>
      <Button onClick={info}>Info</Button>
    </Space>
  );
};
