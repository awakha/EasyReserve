import React, { useEffect, useRef, useState } from "react";
import style from "./ProfilePage.module.css";
import { CustomLayout } from "../../Layout/CustomLayout";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/authSlice";
import axios from "axios";
import authorizedAxiosInstance from "../../../http";

const ProfilePage: React.FC = () => {
  const user = useSelector(selectUser);

  const [reservation, setReservation] = useState([]);

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  useEffect(() => {
    authorizedAxiosInstance
      .get(`http://localhost:3000/api/profile`)
      .then((res) => {
        setReservation(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const cancelReservation = async (reservationId) => {
    try {
      await authorizedAxiosInstance.delete(
        `http://localhost:3000/api/profile/${reservationId}`
      );
      setReservation((prevReservation) =>
        prevReservation.filter((reserv) => reserv.id !== reservationId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomLayout>
      <div className={style.videoContainer}>
        <video ref={videoRef} className={style.video} muted loop>
          <source src="/profile.mp4" type="video/mp4" />
        </video>
        <div className={style.overlay}></div>
        <div className={style.profile}>
          <h2 className={style.title}>Профиль пользователя, {user?.username}</h2>
          {reservation ? (
            reservation.map((reserv) => (
              <div key={reserv.id} className={style.reservationContainer}>
                <h3>Твой забронированный ресторан:</h3>
                <div className={style.reservationInfo}>
                  <p>Ресторан: {reserv["Restaurant.name"]}</p>
                  <p>Дата: {reserv.date}</p>
                  <p>Время: {reserv.startTime}</p>
                  <p>Количество гостей: {reserv.guestsCount}</p>
                </div>
                <button
                  className={style.cancelButton}
                  onClick={() => cancelReservation(reserv.id)}
                >
                  Отменить бронирование
                </button>
              </div>
            ))
          ) : (
            <p>Нет забронированных ресторанов</p>
          )}
        </div>
      </div>
    </CustomLayout>
  );
};

export default ProfilePage;
