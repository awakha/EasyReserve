import { FC } from 'react';
import { Button } from 'antd';

import styles from './Timeslots.module.css';
import { Schedule } from '../../../types/Types';

interface ITimeslots {
  slots: string[];
  setParam: (prev) => void;
  setData: () => void;
  selectedDaySchedule: Schedule[];
}

export const Timeslots: FC<ITimeslots> = ({
  slots,
  setParam,
  setData,
  selectedDaySchedule,
}) => {
  console.log(selectedDaySchedule);

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
