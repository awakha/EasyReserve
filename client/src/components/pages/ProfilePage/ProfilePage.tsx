import React, { useEffect, useState } from "react";
import style from "./ProfilePage.module.css";
import { CustomLayout } from "../../Layout/CustomLayout";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/authSlice";
import axios from "axios";

const ProfilePage: React.FC = () => {
  const user = useSelector(selectUser);

  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setReservation(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <CustomLayout>
      <div className={style.profile}>
        <h2>Профиль пользователя, {user?.username}</h2>
        {reservation ? (
          reservation.map((reserv) => (
            <div key={reserv.id}>
              <h3>Твой забронированный ресторан:</h3>
              <p>Ресторан: {reserv.restId}</p>
              <p>Дата: {reserv.date}</p>
              <p>Время: {reserv.startTime}</p>
              <p>Количество гостей: {reserv.guestsCount}</p>
            </div>
          ))
        ) : (
          <p>Нет забронированных ресторанов</p>
        )}
      </div>
    </CustomLayout>
  );
};

export default ProfilePage;
