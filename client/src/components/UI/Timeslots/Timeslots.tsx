import { FC } from 'react';

import styles from './Timeslots.module.css';
import { Button } from 'antd';

interface ITimeslots {
  slots: string[];
  setParam: (prev) => void;
  setData: () => void;
}

export const Timeslots: FC<ITimeslots> = ({ slots, setParam, setData }) => {
  return (
    <div className={styles.slots}>
      {slots.map((slot) => (
        <Button
          className={styles.button}
          onClick={() => {
            setData((prev) => ({ ...prev, startTime: slot }));
            setParam((prev) => ({ ...prev, menu: 'seats' }));
          }}
        >
          {slot}
        </Button>
      ))}
    </div>
  );
};
