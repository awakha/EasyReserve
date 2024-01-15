import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import style from './MapComponents.module.css';
import axios from 'axios';
import setupCache from 'axios';

export default function Maps() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 13,
  };

  const placemarks = [
    { id: 1, address: 'Московская, 2' },
    { id: 2, address: 'Новинский бульв., 8/2' },
    { id: 3, address: 'Денежный пер., д. 20' },
    { id: 4, address: 'Кропоткинский пер., 7 Метро Парк Культуры' },
    { id: 5, address: 'Тверская ул., 3' },
    { id: 6, address: 'Певческий переулок 6' },
    { id: 7, address: 'ул. Неглинная, 4' },
    { id: 8, address: 'Тверская ул., 3 ' },
    { id: 9, address: 'Страстной бульвар, 8А' },
    { id: 10, address: 'Большой Козловский переулок, 3/2' },
    { id: 11, address: 'Смоленская площадь, 3' },
    { id: 12, address: 'Трехпрудный пер., д. 10/2' },
    { id: 13, address: 'Большая Спасская ул., 15 стр.4' },
    { id: 14, address: 'Цветной бульвар, 2' },
  ];

  const [coordinates, setCoordinates] = useState([]);

  // useEffect(() => {
  //   const cache = setupCache({
  //     maxAge: 15 * 60 * 1000, // Время жизни кэша в миллисекундах (в данном случае 15 минут)
  //   });

  //   const api = axios.create({
  //     adapter: cache.adapter,
  //   });

  //   placemarks.forEach((placemark) => {
  //     api
  //       .get(
  //         `https://geocode-maps.yandex.ru/1.x/?apikey=ee11ac76-8900-40f8-8654-ebdd5c98919e&geocode=${encodeURIComponent(
  //           placemark.address
  //         )}&format=json`
  //       )
  //       .then((res) => {
  //         const response = res.data.response;
  //         if (response.GeoObjectCollection.featureMember.length > 0) {
  //           const point =
  //             response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  //           const [longitude, latitude] = point.split(" ");
  //           setCoordinates((prevCoordinates) => [
  //             ...prevCoordinates,
  //             {
  //               id: placemark.id,
  //               geometry: [Number(latitude), Number(longitude)],
  //             },
  //           ]);
  //         }
  //       })
  //       .catch((e) => console.log(e));
  //   });
  // }, []);

  return (
    <YMaps>
      <div className={style.map}>
        <Map defaultState={defaultState} className={style.map}>
          {coordinates.map((placemark) => (
            <Placemark key={placemark.id} geometry={placemark.geometry} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
}
