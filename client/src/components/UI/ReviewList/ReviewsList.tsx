import { List, Space } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { FC } from 'react';
import { IReview } from '../../../types/Types';

interface IReviewsListProps {
  reviews: IReview[];
}

export const ReviewsList: FC<IReviewsListProps> = ({ reviews }) => {
  return (
    <List>
      <VirtualList data={reviews} height={500} itemHeight={47} itemKey="scroll">
        {(review: IReview) => (
          <List.Item key={review.id}>
            <List.Item.Meta
              title={<p>{review.User?.username}</p>}
              description={review.createdAt}
            />
            <div>{review.text}</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
