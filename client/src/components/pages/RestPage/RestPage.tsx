import { FC, useEffect, useState } from 'react';
import { BsGeo } from 'react-icons/bs';
import { CiForkAndKnife } from 'react-icons/ci';
import { FaRegCommentDots } from 'react-icons/fa6';
import { PiMoneyLight } from 'react-icons/pi';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../store/hooks';
import { IRestaurant, IReview } from '../../../types/Types';
import { CustomLayout } from '../../Layout/CustomLayout';
import { Like } from '../../UI/Buttons/Like';
import { Carousel } from '../../UI/Carousel/Carousel';
import { DatePicker } from '../../UI/DatePicker/DatePicker';

import client from '../../../http/client';
import { ReviewForm } from '../../ReviewForm/ReviewForm';
import { Loader } from '../../UI/Loader/Loader';
import { Menu } from '../../UI/Menu/Menu';
import { ReviewsList } from '../../UI/ReviewList/ReviewsList';
import styles from './RestPage.module.css';

export const RestPage: FC = () => {
  const { id } = useParams();
  const [rest, setRest] = useState<IRestaurant>();
  const [reviewsArr, setReviewsArr] = useState<IReview[]>([]);
  const user = useAppSelector((state) => state.auth.user);

  console.log(reviewsArr);

  const fetchData = async () => {
    try {
      const response = await client.get(`/restaurants/${id}`);
      if (response.data) {
        setRest(response.data.rests);
        setReviewsArr(response.data.reviews);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!rest) {
    return <Loader />;
  }

  return (
    <CustomLayout>
      <div className={styles.carousel}>
        {rest?.images ? <Carousel images={rest?.images}></Carousel> : null}
      </div>

      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.cuisine}>
            <h3>{rest?.Cuisine?.name}</h3>
            <Like id={id} />
          </div>

          <h1>{rest?.name}</h1>

          <div className={styles.info_cards}>
            <div className={styles.main_info}>
              <p href="#map">
                <BsGeo />
                {rest?.address}
              </p>
              <p>
                <CiForkAndKnife />
                {rest?.Cuisine?.name}
              </p>
              <p>
                <PiMoneyLight />
                средний чек: 2500₽
              </p>
            </div>

            <div className={styles.additional_info}>
              {rest?.avgScore ? (
                <>
                  <span>{Number(rest?.avgScore).toFixed(2)}</span>
                  <span>/5</span>
                </>
              ) : null}

              <p>
                <FaRegCommentDots />
                {rest?.countReviews ? rest.countReviews : 0}
              </p>
            </div>
          </div>

          <div className={styles.option_info}>
            <p className={styles.menu_group}>Описание</p>
            <div className={styles.description} id="description">
              {rest?.description}
            </div>

            <p className={styles.menu_group}>Меню</p>
            {rest?.Dishes ? (
              <Menu menu={rest?.Dishes} />
            ) : (
              <span>Нет меню</span>
            )}

            <p className={styles.menu_group}>Отзывы</p>
            <div id="reviews">
              {reviewsArr ? (
                <ReviewsList reviews={reviewsArr} />
              ) : (
                <span>Отзывов пока нет</span>
              )}

              {user ? (
                <ReviewForm restId={rest?.id} setReviewsArr={setReviewsArr} />
              ) : null}
            </div>
          </div>
        </div>

        <div className={styles.calendar}>
          <p>Зарезервируйте столик</p>
          <DatePicker restName={rest?.name} />
        </div>
      </div>
    </CustomLayout>
  );
};
