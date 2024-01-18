import { Spin } from 'antd';
import { FC } from 'react';

import styles from './Loader.module.css';

export const Loader: FC = () => {
  return (
    <div>
      <Spin className={styles.spin} fullscreen={true} />
    </div>
  );
};
