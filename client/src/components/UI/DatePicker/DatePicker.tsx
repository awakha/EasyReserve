import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  IAvailableDateTimes,
  IReservation,
  Schedule,
} from '../../../types/Types';
import { SeatsList } from '../GuestsPicker/SeatsList';
import { Timeslots } from '../Timeslots/Timeslots';
import { ModalComponent } from '../Modal/Modal';
import { OptionsMenu } from '../OptionsMenu/OptionsMenu';

interface IDatePickerProps {
  schedule: IAvailableDateTimes[];
  reservations: IReservation[];
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const DatePicker: FC = ({ restName }) => {
  const { id } = useParams();
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const [schedule, setSchedule] = useState<Schedule[]>();
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  const [param, setParam] = useState({ status: false, menu: 'slots' });

  // USER ID FAKE
  const [data, setData] = useState({
    restaurant: restName,
    date: '',
    startTime: '',
    guestsCount: 0,
    restId: Number(id),
    userId: 1,
  });

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  const selectHandler = (day: Date) => {
    setSelectedDay(day);
    setData((prev) => ({ ...prev, date: format(selectedDay, 'yyyy-MM-dd') }));
    setParam((prev) => ({ ...prev, status: true }));
  };

  const selectedDaySchedule = schedule?.filter((day) =>
    isSameDay(parseISO(day.date), selectedDay)
  );

  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get<Schedule[]>(
        `http://localhost:3000/api/restaurants/schedule/${id}`
      );
      setSchedule(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <HiOutlineChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <HiOutlineChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => selectHandler(day)}
                    disabled={day < today ? true : false}
                    className={classNames(
                      day < today && 'disabled:opacity-50',
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'bg-[#ee873c]',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-[#ee873c]',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <OptionsMenu
            param={param}
            data={data}
            selectedDaySchedule={selectedDaySchedule}
            setParam={setParam}
            setData={setData}
          ></OptionsMenu>
        </div>
      </div>
    </div>
  );
};

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
