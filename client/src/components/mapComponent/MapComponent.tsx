import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import style from "./MapComponents.module.css";

export default function Maps() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
      <div className={style.map}>
        <Map defaultState={defaultState} className={style.map}>
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </div>
    </YMaps>
  );
}