import { Button } from 'antd';
import { FC, ReactNode, useState } from 'react';

import { Schedule } from '../../../types/Types';

import styles from './SeatsList.module.css';

interface ISeatsListProps {
  setData: () => void;
  selectedDaySchedule: Schedule[];
}

export const SeatsList: FC<ISeatsListProps> = ({
  setData,
  selectedDaySchedule,
}) => {
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
