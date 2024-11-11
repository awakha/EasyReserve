import React, { useEffect, useRef, useState } from "react";
import style from "./AboutPage.module.css";
import { CustomLayout } from "../../Layout/CustomLayout";
import { FormComponent } from "../../FormComponent/FormComponent";

const AboutPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <CustomLayout>
      <div className={style.videoContainer}>
        <video ref={videoRef} className={style.video} muted loop>
          <source src="/about.mp4" type="video/mp4" />
        </video>
        <div className={style.overlay}></div>
        {showForm ? (
          <div className={style.formContainer}>
            <h2 className={style.h2}>Форма для сотрудничества</h2>
            <FormComponent />
            <button onClick={handleCloseForm} className={style.closeBtn}>Закрыть</button>
          </div>
        ) : (
          <div className={style.content}>
            <h1 className={style.title}>О нас</h1>
            <p className={style.text}>
              Мы - агрегатор бронирования ресторанов. Наша цель - помочь людям
              легко и удобно находить и бронировать столики в ресторанах. Мы
              сотрудничаем с различными ресторанами, предоставляя пользователям
              широкий выбор заведений для посещения.
            </p>
            <p className={style.text}>
              С помощью нашего сервиса вы можете просматривать информацию о
              ресторанах, включая меню, фотографии, отзывы и рейтинги. Вы можете
              выбрать удобное время и количество мест, чтобы забронировать
              столик прямо через нашу платформу. Мы также предоставляем удобный
              интерфейс для управления и отмены бронирований.
            </p>
            <p className={style.text}>
              Мы стремимся сделать процесс бронирования ресторанов быстрым,
              простым и удобным для всех наших пользователей. Будь то
              романтический обед, деловая встреча или семейное торжество - мы
              поможем вам найти и забронировать идеальное место для вашего
              случая.
            </p>
            <p className={style.text}>
              Присоединяйтесь к нам и начните открывать для себя лучшие
              рестораны в вашем городе!
            </p>
            <button onClick={handleOpenForm} className={style.button}>Если вы владелец ресторана</button>
          </div>
        )}
      </div>
    </CustomLayout>
  );
};

export default AboutPage;
