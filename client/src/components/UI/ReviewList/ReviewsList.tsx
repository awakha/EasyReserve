import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { FC } from 'react';
import { IReview } from '../../../types/Types';

import styles from './ReviewsList.module.css';
import { useAppSelector } from '../../../store/hooks';

interface IReviewsListProps {
  reviews: IReview[];
}

export const ReviewsList: FC<IReviewsListProps> = ({ reviews }) => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <List>
      <VirtualList
        data={reviews}
        height={reviews.length * 20}
        itemHeight={47}
        itemKey="scroll"
      >
        {(review: IReview) => (
          <List.Item key={review.id} className={styles.comment}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${2}`}
                />
              }
              title={
                review.User ? (
                  <p>{review.User?.username}</p>
                ) : (
                  <p>{user?.username}</p>
                )
              }
              description={review.createdAt}
            />
            <div>{review.text}</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
