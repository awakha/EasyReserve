import { Skeleton, List } from 'antd';
import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IDish } from '../../../types/Types';

import styles from './Menu.module.css';

interface IMenuProps {
  restId?: number;
  menu: IDish[];
}

export const Menu: FC<IMenuProps> = ({ menu, restId }) => {
  return (
    <div className={styles.scrollableDiv}>
      <InfiniteScroll
        dataLength={menu.length}
        // next={loadMoreData}
        // hasMore={menu.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={menu}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta title={<p>{item.name}</p>} />
              <div>{item.price}₽</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
