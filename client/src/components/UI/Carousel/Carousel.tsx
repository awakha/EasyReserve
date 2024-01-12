import { FC } from 'react';
import Slider from 'react-slick';

import styles from './Carousel.module.css';

interface ICarouselProps {
  images: string[];
}

export const Carousel: FC<ICarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: images.length,
    slidesToScroll: images.length,
  };

  return (
    <Slider {...settings}>
      {images.map((url, i) => (
        <img src={url} alt="img" key={i} className={styles.carousel_img} />
      ))}
    </Slider>
  );
};
