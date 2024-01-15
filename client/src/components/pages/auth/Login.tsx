import { useState, FC } from 'react';
import { CustomLayout } from '../../Layout/CustomLayout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/authSlice';
import AuthService from '../../../services/AuthService';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [validationResult, setValidationResult] = useState('');

  const handleLogin = async () => {
    setValidationResult('');

    const response = await AuthService.login(email, password);
    if (response && response.status === 200) {
      dispatch(setUser(response.data.user));
      navigate('/');

      return;
    }

    setValidationResult(response.response.data.message);
  };

  return (
    <CustomLayout>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {validationResult ? (
        <>
          <h2>{validationResult}</h2>
        </>
      ) : null}
    </CustomLayout>
  );
};
