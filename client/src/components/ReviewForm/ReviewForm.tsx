import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FC, useState } from 'react';

import { FaStar } from 'react-icons/fa6';
import authorizedAxiosInstance from '../../http';
import styles from './ReviewForm.module.css';

const colors = {
  orange: '#ee873c',
  grey: '#a9a9a9',
};

interface ReviewFormProps {
  restId: string;
  setReviewsArr: () => void;
}

export const ReviewForm: FC<ReviewFormProps> = ({ restId, setReviewsArr }) => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const stars = Array(5).fill(0);
  const [data, setData] = useState({
    score: currentValue,
    text: '',
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

  const createReview = async () => {
    try {
      const response = await authorizedAxiosInstance.post('/profile', data);
      if (response.status === 200) {
        setReviewsArr((prev) => [...prev, response.data]);
        setData({
          score: currentValue,
          text: '',
          restId: restId,
        });
        setCurrentValue(0);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
        value={data.text}
        className={styles.text_area}
      />
      <Button type="text" className={styles.add_btn} onClick={createReview}>
        Добавить
      </Button>
    </div>
  );
};
