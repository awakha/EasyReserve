import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { FC } from 'react';

export const Error: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>The page you were looking for doesn't exist</p>
      <p>
        <Button onClick={() => navigate('/')}>Home</Button>
      </p>
    </div>
  );
};
