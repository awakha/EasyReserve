import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';
import { FC } from 'react';
import { IReview } from '../../../types/Types';
import React from 'react';

interface IReviewsListProps {
  reviews: IReview[];
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ReviewsList: FC<IReviewsListProps> = ({ reviews }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      // pagination={{
      //   onChange: (page) => {
      //     console.log(page);
      //   },
      //   pageSize: 3,
      // }}
      dataSource={reviews}
      // footer={
      //   <div>
      //     <b>ant design</b> footer part
      //   </div>
      // }
      renderItem={(review) => (
        <List.Item
          key={review.id}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
        >
          <List.Item.Meta
            title={<p>{review.User?.username}</p>}
            description={review.createdAt}
          />
          {review.text}
        </List.Item>
      )}
    />
  );
};
