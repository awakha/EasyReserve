import { FC, useEffect, useState } from "react";
import { CustomLayout } from "../../Layout/CustomLayout";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import { RestaurantItem } from "../../UI/RestaurantItem/RestaurantItem";
import axios from "axios";
import { RecommendContainer } from "../../UI/RecommendContainer/RecommendContainer";
import { useDispatch } from "react-redux";

export const Homepage: FC = () => {
  const [cities, setCities] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setCities(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CustomLayout>
      <img
        src="../../../public/home_img.jpg"
        alt="img"
        className={styles.home_img}
      />
      {/* {cities.map((city) => (
        <RecommendContainer city={city} key={city.id} />
      ))} */}
      {/* {places.map((city) => (
        <div className={styles.recommend_container}>
          <div className={styles.recommend_header}>
            <h2>Popular restaurants in {city}</h2>
            <Link to={`/restaurants/${city}`}>
              <h3>See more</h3>
            </Link>
          </div>
          <div className={styles.rests_container}>
            <RestaurantItem />
            <RestaurantItem />

            <RestaurantItem />

            <RestaurantItem />
          </div>
        </div>
      ))} */}
    </CustomLayout>
  );
};
