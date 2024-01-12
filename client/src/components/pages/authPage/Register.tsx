import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomLayout } from "../../Layout/CustomLayout";
import authAxiosInstance from "../../../http";
import AuthService from "../../../services/AuthService";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../../store/slices/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await dispatch(loginAsync(email, password));
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

export default Register;
