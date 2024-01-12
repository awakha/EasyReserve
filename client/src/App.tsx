import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListRestaurantsPage from './components/pages/restaurantMapPage/listRestaurantsPage';
import { Homepage } from './components/pages/Homepage/Homepage';
import AdminPage from './components/pages/admin/AdminPage';
import { RestPage } from './components/pages/RestPage/RestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/restaurants/:id" element={<RestPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
