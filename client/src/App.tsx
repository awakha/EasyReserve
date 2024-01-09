import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListRestaurantsPage from "./pages/restaurantMapPage/listRestaurantsPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/restaurant" element={<ListRestaurantsPage />} />
      </Routes>
    </>
  );
}

export default App;
