import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListRestaurantsPage from "./pages/restaurantMapPage/listRestaurantsPage";
import { Homepage } from "./components/pages/Homepage/Homepage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/" element={<Homepage />}></Route>
      <Route path="/restaurants/:city"></Route>
      </Routes>
    </>
  )}


export default App;
