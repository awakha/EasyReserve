import { FC } from 'react';
import { Button } from 'antd';

import styles from './Timeslots.module.css';

interface ITimeslots {
  slots: string[];
  setParam: () => void;
  setData: () => void;
}

export const Timeslots: FC<ITimeslots> = ({ slots, setParam, setData }) => {
  return (
    <div className={styles.slots}>
      {slots.map((slot, i) => (
        <Button
          data-id={i}
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
