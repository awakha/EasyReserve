import { FC } from 'react';
import { Button } from 'antd';

import styles from './Timeslots.module.css';
import { ReservationData, Schedule } from '../../../types/Types';

interface ITimeslots {
  selectedDaySchedule: Schedule;
  setParam: () => void;
  setData: () => void;
  setAvailableSeats: () => void;
}

export const Timeslots: FC<ITimeslots> = ({
  setParam,
  setData,
  setAvailableSeats,
  selectedDaySchedule,
}) => {
  return (
    <div className={styles.slots}>
      {selectedDaySchedule.slots.map((slot, i) => (
        <Button
          data-id={i}
          className={styles.button}
          onClick={() => {
            setData((prev) => ({ ...prev, startTime: slot }));
            setParam((prev) => ({ ...prev, menu: 'seats' }));
            setAvailableSeats(selectedDaySchedule.seats);
          }}
        >
          {slot}
        </Button>
      ))}
    </div>
  );
};
