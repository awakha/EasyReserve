import { useState, FC } from "react";
import { CustomLayout } from "../../Layout/CustomLayout";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { setUser } from "../../../store/slices/authSlice";
import { useDispatch } from "react-redux";

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
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Зарегестрироваться</button>

      {validationResult ? (
        <>
          <h2>{validationResult}</h2>
        </>
      ) : null}
    </CustomLayout>
  );
};
