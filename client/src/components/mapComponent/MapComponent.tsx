import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import style from "./MapComponents.module.css";
import axios from "axios";

export default function Maps() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  const placemarks = [
    { id: 1, address: "Тверская 6" },
  ];

  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    placemarks.forEach((placemark) => {
      axios
        .get(
          `https://geocode-maps.yandex.ru/1.x/?apikey=ee11ac76-8900-40f8-8654-ebdd5c98919e&geocode=${encodeURIComponent(
            placemark.address
          )}&format=json`
        )
        .then((res) => {
          const response = res.data.response;
          if (response.GeoObjectCollection.featureMember.length > 0) {
            const point =
              response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
            const [longitude, latitude] = point.split(" ");
            setCoordinates((prevCoordinates) => [
              ...prevCoordinates,
              {
                id: placemark.id,
                geometry: [Number(latitude), Number(longitude)],
              },
            ]);
          }
        })
        .catch((e) => console.log(e));
    });
  }, []);

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
