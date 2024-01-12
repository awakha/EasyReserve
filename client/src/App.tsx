import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListRestaurantsPage from "./components/pages/restaurantMapPage/listRestaurantsPage";
import { Homepage } from "./components/pages/Homepage/Homepage";
import AdminPage from "./components/pages/admin/AdminPage";
import { RestPage } from "./components/pages/RestPage/RestPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import Register from "./components/pages/authPage/Register";
import { Login } from "./components/pages/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/restaurants/:id" element={<RestPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route path="/restaurants/:city"></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
