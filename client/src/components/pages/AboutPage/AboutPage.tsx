import React from "react";
import style from "./AboutPage.module.css";
import { CustomLayout } from "../../Layout/CustomLayout";
import { FormComponent } from "../../FormComponent/FormComponent";

const AboutPage: React.FC = () => {
  return (
    <CustomLayout>
      <div className={style.content}>
        <h1 className={style.title}>О нас</h1>
        <p>Мы - агрегатор бронирования ресторанов. Наша цель - помочь людям легко и удобно находить и бронировать столики в ресторанах. Мы сотрудничаем с различными ресторанами, предоставляя пользователям широкий выбор заведений для посещения.</p>
        <p>С помощью нашего сервиса вы можете просматривать информацию о ресторанах, включая меню, фотографии, отзывы и рейтинги. Вы можете выбрать удобное время и количество мест, чтобы забронировать столик прямо через нашу платформу. Мы также предоставляем удобный интерфейс для управления и отмены бронирований.</p>
        <p>Мы стремимся сделать процесс бронирования ресторанов быстрым, простым и удобным для всех наших пользователей. Будь то романтический обед, деловая встреча или семейное торжество - мы поможем вам найти и забронировать идеальное место для вашего случая.</p>
        <p>Присоединяйтесь к нам и начните открывать для себя лучшие рестораны в вашем городе!</p>
      </div>
      <div className={style.formContainer}>
        <h2 className={style.h2}>Форма для сотрудничества</h2>
        <FormComponent />
      </div>
    </CustomLayout>
  );
};

export default AboutPage;