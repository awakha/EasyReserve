import { FC, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

import { ReservationData, Schedule } from '../../../types/Types';
import { SeatsList } from '../GuestsPicker/SeatsList';
import { ModalComponent } from '../Modal/Modal';
import { Timeslots } from '../Timeslots/Timeslots';

import styles from './OptionMenu.module.css';

interface IOptionMenuProps {
  param: {
    status: boolean;
    menu: string;
  };
  data: ReservationData;
  selectedDaySchedule: Schedule[];
  setParam: () => void;
  setData: () => void;
}

export const OptionsMenu: FC<IOptionMenuProps> = ({
  data,
  param,
  setParam,
  setData,
  selectedDaySchedule,
}) => {
  const [availableSeats, setAvailableSeats] = useState(0);

  const back = () => {
    setParam((prev) => ({ ...prev, menu: 'slots' }));
    setData((prev) => ({ ...prev, guestsCount: 0, startTime: '' }));
  };

  const forward = () => {
    if (data.startTime.length) {
      setParam((prev) => ({ ...prev, menu: 'seats' }));
    }
  };

  return (
    <section style={{ visibility: param.status ? 'visible' : 'hidden' }}>
      <div className={styles.btn_group}>
        <h2 className="font-semibold text-gray-900">
          {param.menu === 'slots' ? 'Время' : 'Количество гостей'}
        </h2>
        <button
          type="button"
          onClick={back}
          className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-500"
        >
          <HiOutlineChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={forward}
          type="button"
          className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-500"
        >
          <HiOutlineChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <ol className={styles.seats}>
        {(() => {
          switch (param.menu) {
            case 'slots':
              return selectedDaySchedule?.length > 0 ? (
                selectedDaySchedule?.map((day, i) => (
                  <Timeslots
                    selectedDaySchedule={selectedDaySchedule[i]}
                    setAvailableSeats={setAvailableSeats}
                    setParam={setParam}
                    setData={setData}
                    data-id={i}
                  />
                ))
              ) : (
                <p>Нет расписания</p>
              );
            case 'seats':
              return (
                <SeatsList setData={setData} availableSeats={availableSeats} />
              );
          }
        })()}
        {data.guestsCount > 0 ? <ModalComponent data={data} /> : null}
      </ol>
    </section>
  );
};
