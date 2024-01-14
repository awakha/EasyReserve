import { FC } from 'react';

interface IErrorProps {
  message: string;
}

export const Error: FC<IErrorProps> = ({ message }) => {
  return <div>{message}</div>;
};
