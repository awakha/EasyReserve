import { Progress } from 'antd';

import styles from './ProgressBar.module.css';
import { FC } from 'react';

interface IProgressBarProps {
  avgScore: string;
}

const scoreRange: string[] = ['9-10', '7-8', '5-6', '3-4', '1-2'];

export const ProgressBar: FC<IProgressBarProps> = ({ avgScore }) => {
  return (
    <div className={styles.progress_bar}>
      <Progress
        type="circle"
        percent={Number(avgScore).toFixed(2)}
        format={(percent) => `${percent}/10`}
        strokeColor={'#22222F'}
      />
      <div className={styles.bar_group}>
        {scoreRange.map((range) => (
          <Progress
            percent={range}
            size="small"
            format={(percent) => `${percent}`}
            strokeColor={'#22222F'}
          />
        ))}
      </div>
    </div>
  );
};
