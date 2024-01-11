import { useState } from "react";
import styles from "./CreateAdminForm.module.css";
import axios from "axios";

export default function CreateRestForm({ setRestaurant }) {
  const [data, setData] = useState({
    name: "",
    description: "",
    address: "",
    images: null,
    cuisineId: "",
    cityId: "",
    timetableId: "",
  });

  const chengeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addHendler = async (e) => {
    try {
      const res = await axios.post("http://localhost:3000/admin",  data);
      if (res.status === 200) {
        setRestaurant((prev) => [...prev, res.data]);
        setData({
          name: "",
          description: "",
          address: "",
          images: [],
          cuisineId: "",
          cityId: "",
          timetableId: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.createRestForm}>
      <input
        placeholder="Name"
        onChange={chengeHandler}
        type="text"
        name="name"
        value={data.name}
        className={styles.inputField}
      />

      <input
        placeholder="Description"
        onChange={chengeHandler}
        type="text"
        name="description"
        value={data.description}
        className={styles.inputField}
      />
      <input
        placeholder="Address"
        onChange={chengeHandler}
        type="text"
        name="address"
        value={data.address}
        className={styles.inputField}
      />
      <input
        placeholder="Images"
        onChange={chengeHandler}
        type="text"
        name="images"
        value={data.images}
        className={styles.inputField}
      />
      <input
        placeholder="CuisineId"
        onChange={chengeHandler}
        type="text"
        name="cuisineId"
        value={data.cuisineId}
        className={styles.inputField}
      />
      <input
        placeholder="CityId"
        onChange={chengeHandler}
        type="text"
        name="cityId"
        value={data.cityId}
        className={styles.inputField}
      />
      <input
        placeholder="TimetableId"
        onChange={chengeHandler}
        type="text"
        name="timetableId"
        value={data.timetableId}
        className={styles.inputField}
      />
      <button onClick={addHendler} type="button" className={styles.submitButton}>
        Tuch me, please
      </button>
    </form>
  );
}
