import { FC, useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

import { ReservationData, Schedule } from '../../../types/Types';
import { SeatsList } from '../GuestsPicker/SeatsList';
import { Timeslots } from '../Timeslots/Timeslots';
import { ModalComponent } from '../Modal/Modal';

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
    <section
      className="mt-12 md:mt-0 md:pl-14"
      style={{ visibility: param.status ? 'visible' : 'hidden' }}
    >
      <div className={styles.btn_group}>
        <h2 className="font-semibold text-gray-900">
          {param.menu === 'slots' ? 'Available Time Slots' : 'Number Of Guests'}
        </h2>
        <button
          type="button"
          onClick={back}
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <HiOutlineChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={forward}
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <HiOutlineChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <ol>
        {(() => {
          switch (param.menu) {
            case 'slots':
              return selectedDaySchedule?.length > 0 ? (
                selectedDaySchedule?.map((day, i) => (
                  <Timeslots
                    slots={day.slots}
                    setParam={setParam}
                    setData={setData}
                    data-id={i}
                    selectedDaySchedule={selectedDaySchedule}
                  />
                ))
              ) : (
                <p>No schedule or available time</p>
              );
            case 'seats':
              return (
                <SeatsList
                  setData={setData}
                  selectedDaySchedule={selectedDaySchedule}
                />
              );
          }
        })()}
        {data.guestsCount > 0 ? <ModalComponent data={data} /> : null}
      </ol>
    </section>
  );
};
