import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import './App.css';
import AboutPage from './components/pages/AboutPage/AboutPage';
import { Homepage } from './components/pages/Homepage/Homepage';
import { RestPage } from './components/pages/RestPage/RestPage';
import AdminPage from './components/pages/admin/AdminPage';
import { Login } from './components/pages/auth/Login';
import { Register } from './components/pages/auth/Register';
import ListRestaurantsPage from './components/pages/restaurantMapPage/listRestaurantsPage';
import { useAppDispatch } from './store/hooks';
import { getRestaurants } from './store/thunkActions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/restaurants/:id" element={<RestPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/restaurants/:city"></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
