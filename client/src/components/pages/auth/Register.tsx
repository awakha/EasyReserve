import { useState, FC } from "react";
import { CustomLayout } from "../../Layout/CustomLayout";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { setUser } from "../../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import style from "./Register.module.css";
import { Button } from "antd";

export const Register: FC = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [validationResult, setValidationResult] = useState("");

  const handleRegister = async () => {
    // Clear previous validation result
    setValidationResult("");

    const response = await AuthService.register(username, email, password);
    if (response && response.status === 200) {
      dispatch(setUser(response.data.user));
      navigate("/");

      return;
    }

    setValidationResult(response.response.data.message);
  };

  return (
    <CustomLayout>
      <div className={style.form}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Зарегестрироваться</Button>

        {validationResult ? (
          <>
            <h2>{validationResult}</h2>
          </>
        ) : null}
      </div>
    </CustomLayout>
  );
};
