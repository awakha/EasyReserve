import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

import ListRestaurantsPage from './components/pages/restaurantMapPage/listRestaurantsPage';
import { Homepage } from './components/pages/Homepage/Homepage';
import { RestPage } from './components/pages/RestPage/RestPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import { Register } from './components/pages/auth/Register';
import AdminPage from './components/pages/admin/AdminPage';
import { Login } from './components/pages/auth/Login';
import { getRestaurants } from './store/thunkActions';
import { useAppDispatch } from './store/hooks';
import { Error } from './components/pages/Error/Error';
import { Loader } from './components/UI/Loader/Loader';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
