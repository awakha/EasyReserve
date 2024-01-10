import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

import { Header } from './Header/CustomHeader';

import styles from './Layout.module.css';
import { Footer } from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const CustomLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </div>
  );
};
