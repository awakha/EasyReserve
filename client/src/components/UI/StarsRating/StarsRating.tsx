import { FC, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './StarsRating.module.css';
import { MdStarOutline } from 'react-icons/md';

const colors = {
  orange: '#ee873c',
  grey: '#a9a9a9',
};

export const StarsRating: FC = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const stars = Array(10).fill(0);

  const handleClick = (value: number) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
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
  );
};
