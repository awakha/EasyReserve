import { Layout } from 'antd';
import { FC } from 'react';

import styles from './Footer.module.css';

export const Footer: FC = () => {
  return <Layout.Footer className={styles.footer}></Layout.Footer>;
};
