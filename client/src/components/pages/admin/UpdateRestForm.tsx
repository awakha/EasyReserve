// UpdateRestForm.tsx
import React, { useState, useEffect } from "react";
import styles from "./CreateAdminForm.module.css";
import axios from "axios";

export default function UpdateRestForm({ setRestaurant, onClose, restaurantData }) {
  const [data, setData] = useState({
    name: restaurantData.name,
    description: restaurantData.description,
    address: restaurantData.address,
    images: restaurantData.images,
    cuisineId: restaurantData.cuisineId,
    cityId: restaurantData.cityId,
    timetableId: restaurantData.timetableId,
  });

  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateHandler = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/admin`, { id: restaurantData.id, ...data });
      if (res.status === 200) {
        setRestaurant((prev) => {
          // Обновите массив ресторанов, заменив старые данные новыми
          return prev.map((rest) => (rest.id === restaurantData.id ? { ...rest, ...data } : rest));
        });
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={changeHandler}
        type="text"
        name="name"
        value={data.name}
      />
      {/* Остальные поля формы */}
      <button onClick={updateHandler} type="button">
        Update Restaurant
      </button>
    </form>
  );
}
