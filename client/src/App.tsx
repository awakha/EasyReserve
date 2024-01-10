import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListRestaurantsPage from "./pages/restaurantMapPage/listRestaurantsPage";
import { Homepage } from "./components/pages/Homepage/Homepage";
import AdminPage from "./components/pages/admin/AdminPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/restaurants/:city"></Route>
      </Routes>
    </>
  );
}

export default App;
