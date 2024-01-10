import { useEffect, useState } from "react";
import style from "./listRestaurantsPage.module.css";
import axios from "axios";
import RestaurantPage from "../restaurant/RestaurantsPage";
import MapComponent from "../../mapComponent/MapComponent";
import { CustomLayout } from "../../Layout/CustomLayout";
import SearchBar from "../../SearchBar/SearchBar";

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
    <CustomLayout>
      <SearchBar setRestaurant={setRestaurant}/>
      <div className={style.RestaurantMapPage}>
        <div className={style.RestaurantList}>
          <RestaurantPage restaurant={restaurant} />
        </div>
        <div className={style.MapContainer}>
          <MapComponent />
        </div>
      </div>
    </CustomLayout>
  );
}
