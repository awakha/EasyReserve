import { Spin } from 'antd';
import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div>
      <Spin size="large" />
      <h2>Loading...</h2>
    </div>
  );
};
