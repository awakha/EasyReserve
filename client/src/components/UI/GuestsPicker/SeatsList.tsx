import { Button } from 'antd';
import { FC, useState } from 'react';

import styles from './SeatsList.module.css';

interface ISeatsListProps {
  setData: () => void;
  availableSeats: number;
}

export const SeatsList: FC<ISeatsListProps> = ({ setData, availableSeats }) => {
  const [array, setArray] = useState(new Array(10).fill(null));
  const [name, setName] = useState('more options');

  const clickHandler = () => {
    array.length === 10
      ? [setArray(new Array(30).fill(null)), setName('close options')]
      : [setArray(new Array(10).fill(null)), setName('open options')];
  };

  return (
    <div className={styles.seats}>
      <div className={styles.btn_group}>
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
    </div>
  );
};
