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

import { ProgressBar } from '../../UI/ProgressBar/ProgressBar';
import { ReviewsList } from '../../UI/ReviewList/ReviewsList';
import styles from './RestPage.module.css';
import { Menu } from '../../UI/Menu/Menu';
import { ReviewForm } from '../../ReviewForm/ReviewForm';

export const RestPage: FC = () => {
  const { id } = useParams();
  const [rest, setRest] = useState<IRestaurant>();
  const [reviewsArr, setReviewsArr] = useState<IReview[]>([]);
  const user = useAppSelector((state) => state.auth.user);

  const { isLoading, rests, reviews } = useAppSelector((state) => state.rests);

  useEffect(() => {
    const rest = rests.filter((rest) => rest.id == id)[0];
    const restReviews = reviews.filter((review) => review.restId == id);

    if (rest && restReviews.length > 0) {
      setRest(rest);
      setReviewsArr(restReviews);
    }
  }, [id, rests, reviews]);

  if (isLoading) {
    return;
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
              <a href="#map">
                <BsGeo />
                {rest?.address}
              </a>
              <p>
                <CiForkAndKnife />
                {rest?.Cuisine?.name}
              </p>
              <p>
                <PiMoneyLight />
                средний чек: $56
              </p>
            </div>
            <div className={styles.additional_info}>
              {rest?.avgScore ? (
                <>
                  <span>{Number(rest?.avgScore).toFixed(2)}</span>
                  <span>/10</span>
                </>
              ) : null}

              <p>
                <FaRegCommentDots />
                {rest?.countReviews ? rest.countReviews : 0}
              </p>
            </div>
          </div>

          <div className={styles.option_info}>
            <p className={styles.button}>Описание</p>
            <div className={styles.description} id="description">
              {rest?.description}
            </div>

            <p className={styles.button}>Меню</p>
            {rest?.Dishes ? (
              <Menu menu={rest?.Dishes} />
            ) : (
              <span>Нет меню</span>
            )}

            <p className={styles.button}>Отзывы</p>
            <div className={styles.reviews} id="reviews">
              {/* <ProgressBar avgScore={rest?.avgScore} /> */}
              {reviewsArr ? (
                <ReviewsList reviews={reviewsArr} />
              ) : (
                <span>Отзывов пока нет</span>
              )}

              {user ? <ReviewForm restId={rest?.id} /> : null}
            </div>
          </div>
        </div>
        <div className={styles.calendar}>
          <DatePicker restName={rest?.name} />
        </div>
      </div>
    </CustomLayout>
  );
};
