import { useState, FC } from "react";
import { CustomLayout } from "../../Layout/CustomLayout";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../../store/slices/authSlice";
import { AppThunk } from "../../../store/store";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await (dispatch as (action: AppThunk) => Promise<void>)(
        loginAsync(email, password)
      );
      navigate("/");
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
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
    </CustomLayout>
  );
};
