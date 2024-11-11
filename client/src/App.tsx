import { Route, Routes } from 'react-router-dom';
import './App.css';

import AboutPage from './components/pages/AboutPage/AboutPage';
import { Error } from './components/pages/Error/Error';
import { Homepage } from './components/pages/Homepage/Homepage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import { RestPage } from './components/pages/RestPage/RestPage';
import AdminPage from './components/pages/admin/AdminPage';
import { Login } from './components/pages/auth/Login';
import { Register } from './components/pages/auth/Register';
import ListRestaurantsPage from './components/pages/restaurantMapPage/listRestaurantsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<ListRestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
