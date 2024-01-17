import { useState, FC } from "react";
import { CustomLayout } from "../../Layout/CustomLayout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/slices/authSlice";
import AuthService from "../../../services/AuthService";
import styles from "./Login.module.css";
import { Button } from "antd";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [validationResult, setValidationResult] = useState("");

  const handleLogin = async () => {
    setValidationResult("");

    const response = await AuthService.login(email, password);
    if (response && response.status === 200) {
      if (response.data.user.isAdmin) {
        dispatch(setUser(response.data.user));
        navigate("/admin");
        return;
      }
      dispatch(setUser(response.data.user));
      navigate("/");
      return;
    }

    setValidationResult(response.response.data.message);
  };

  return (
    <CustomLayout>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Войти</Button>
        {validationResult ? (
          <>
            <h2>{validationResult}</h2>
          </>
        ) : null}
      </div>
    </CustomLayout>
  );
};
