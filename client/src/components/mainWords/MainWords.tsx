import React, { useState, useEffect, useRef } from "react";
import style from "./MainWords.module.css";

const MainWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["БРОНИРУЙТЕ", "ПРОСМАТРИВАЙТЕ", "НАСЛАЖДАЙТЕСЬ"];
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <section className={style.hero}>
      <video ref={videoRef} className={style.video} loop muted>
        <source src="/videoback.mp4" type="video/mp4" />
      </video>
      <div className={style.hero_text}>
        <p className={`${style.p1} ${style.center}`}>EASYRESERVE</p>
        <p className={`${style.p2} ${style.center}`}>
          {words[currentWordIndex]}
        </p>
      </div>
      <a className={style.btn} href="#this">
        <div className={style.btn_border}></div>
        <i className={style.btn_icon}></i>
      </a>
    </section>
  );
};

export default MainWords;
