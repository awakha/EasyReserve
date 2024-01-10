import { useEffect, useState } from "react";
import style from "./listRestaurantsPage.module.css";
import axios from "axios";
import RestaurantPage from "../restaurant/RestaurantsPage";
import MapComponent from "../../components/mapComponent/MapComponent";

export default function RestaurantMapPage() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/map`, {
        withCredentials: true,
      })
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={style.RestaurantMapPage}>
      <div className={style.RestaurantList}>
        <RestaurantPage restaurant={restaurant} />
      </div>
      <div className={style.MapContainer}>
        <MapComponent />
      </div>
    </div>
  );
}
