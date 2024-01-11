import { Button } from 'antd';
import { FC, useState } from 'react';

interface ISeatsListProps {
  setData: () => void;
}

export const SeatsList: FC<ISeatsListProps> = ({ setData }) => {
  const [array, setArray] = useState(new Array(8).fill(null));
  return (
    <div>
      {array.map((_, i) => (
        <Button
          onClick={() => setData((prev) => ({ ...prev, guestsCount: i + 1 }))}
        >
          {i + 1}
        </Button>
      ))}
      <Button onClick={() => setArray(new Array(100).fill(null))}>
        show more option
      </Button>
    </div>
  );
};
