import { FC, ReactNode } from 'react';
import { Layout } from 'antd';

import { Header } from './Header/CustomHeader';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';

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
