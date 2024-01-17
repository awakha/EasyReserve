import { Button, Flex, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FC, useState } from 'react';

import styles from './ReviewForm.module.css';
import { StarsRating } from '../UI/StarsRating/StarsRating';
import { FaStar } from 'react-icons/fa6';
import { useAppSelector } from '../../store/hooks';

const colors = {
  orange: '#ee873c',
  grey: '#a9a9a9',
};

export const ReviewForm: FC = ({ restId }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const user = useAppSelector((state) => state.auth.user);
  const stars = Array(10).fill(0);
  const [data, setData] = useState({
    score: currentValue,
    text: '',
    userId: user?.id,
    restId: restId,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleClick = (value: number) => {
    setCurrentValue(value);
    setData((prev) => ({ ...prev, score: currentValue }));
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const createReview = async () => {};

  return (
    <div className={styles.form}>
      <div className={styles.main}>
        <div className={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                fill={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                className={styles.icon}
              />
            );
          })}
        </div>
      </div>
      <TextArea
        onChange={onChange}
        placeholder="Начните писать свой отзыв..."
      />
      <Button type="text" className={styles.add_btn} onClick={createReview}>
        Добавить
      </Button>
    </div>
  );
};
