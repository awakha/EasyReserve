import { useState, FC } from "react";
import { CustomLayout } from "../../Layout/CustomLayout";
import { useDispatch } from "react-redux";
import { AppThunk } from "../../../store/store";
import { registerAsync } from "../../../store/slices/authSlice";

export const Register: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await (dispatch as (action: AppThunk) => Promise<void>)(
        registerAsync(username, email, password)
      );
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
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Зарегестрироваться</button>
    </CustomLayout>
  );
};
