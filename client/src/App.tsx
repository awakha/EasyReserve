import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListRestaurantsPage from "./components/pages/restaurantMapPage/listRestaurantsPage";
import { Homepage } from "./components/pages/Homepage/Homepage";
import AdminPage from "./components/pages/admin/AdminPage";
import { Login } from "./components/pages/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/restaurants/:city"></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
