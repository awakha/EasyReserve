import { Button } from 'antd';
import { FC, useState } from 'react';

import styles from './SeatsList.module.css';

interface ISeatsListProps {
  setData: () => void;
  availableSeats: number;
}

export const SeatsList: FC<ISeatsListProps> = ({ setData, availableSeats }) => {
  const [array, setArray] = useState(new Array(9).fill(null));
  const [name, setName] = useState('больше');

  const clickHandler = () => {
    array.length === 9
      ? [setArray(new Array(30).fill(null)), setName('меньше')]
      : [setArray(new Array(9).fill(null)), setName('больше')];
  };

  return (
    <>
      <div className={styles.seats}>
        {array.map((_, i) => (
          <Button
            className={styles.button}
            disabled={i + 1 > availableSeats}
            onClick={() => setData((prev) => ({ ...prev, guestsCount: i + 1 }))}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <div className={styles.options}>
        <Button className={styles.options_bts} onClick={clickHandler}>
          {name}
        </Button>
      </div>
    </>
  );
};
