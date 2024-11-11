import style from './RestaurantPage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function RestaurantPage({ restaurant }) {
  const sliderSettings = {
    dots: true, // Показывать точки для навигации по слайдам
    infinite: true, // Бесконечное прокручивание слайдов
    speed: 500, // Скорость прокрутки слайдов
    slidesToShow: 1, // Количество отображаемых слайдов
    slidesToScroll: 1, // Количество прокручиваемых слайдов за раз
  };

  return (
    <>
      {restaurant.map((rest) => (
        <Link to={`/restaurants/${rest.id}`}>
          <div className={style.cardRest} key={rest.id}>
            <div className={style.content}>
              <div className={style.imageContainer}>
                <Slider {...sliderSettings}>
                  {rest.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={style.descriptionContainer}>
                <p>{rest.description}</p>
                <p>{rest.address}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
