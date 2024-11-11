import { useEffect, useRef, useState } from "react";
import style from "./listRestaurantsPage.module.css";
import axios from "axios";
import RestaurantPage from "../restaurant/RestaurantsPage";
import MapComponent from "../../mapComponent/MapComponent";
import { CustomLayout } from "../../Layout/CustomLayout";
import SearchBar from "../../SearchBar/SearchBar";

export default function RestaurantMapPage() {
  const [restaurant, setRestaurant] = useState([]);
  const videoRef = useRef(null);

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

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <CustomLayout>
      <div className={style.video_container}>
        <video ref={videoRef} className={style.video} loop muted>
          <source src="/search.mp4" type="video/mp4" />
        </video>
        <div className={style.overlay}></div>
        <div className={style.search_container}>
          <h2 className={style.search_title}>Найди свой ресторан</h2>
          <SearchBar
            setRestaurant={setRestaurant}
            className={style.searchBar}
          />
        </div>
      </div>
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
