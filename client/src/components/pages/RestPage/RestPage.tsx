import { FC, useEffect, useState } from 'react';
import { IRestaurant, IReview } from '../../../types/Types';
import { CustomLayout } from '../../Layout/CustomLayout';
import { Carousel } from '../../UI/Carousel/Carousel';

import styles from './RestPage.module.css';
import { HeartOutlined } from '@ant-design/icons';
import { BsGeo } from 'react-icons/bs';
import { CiForkAndKnife } from 'react-icons/ci';
import { PiMoneyLight } from 'react-icons/pi';
import { FaRegCommentDots } from 'react-icons/fa6';
import { Button } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Menu } from '../../UI/Menu/Menu';
import { ReviewsList } from '../../UI/ReviewList/ReviewsList';
import { ProgressBar } from '../../UI/ProgressBar/ProgressBar';
import { DatePicker } from '../../UI/DatePicker/DatePicker';
import { Like } from '../../UI/Buttons/Like';

export const RestPage: FC = () => {
  const [rest, setRest] = useState<IRestaurant>();
  const [reviews, setReviews] = useState<IReview[]>();
  const { id } = useParams();

  const fetchRestData = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurants/${id}`
      );
      setRest(response.data.rests);
      setReviews(response.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestData();
  }, []);

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
                avg price: $56
              </p>
            </div>
            <div className={styles.additional_info}>
              {rest?.avgScore ? (
                <>
                  <span>{Number(rest?.avgScore).toFixed(2)}</span>
                  <span>/10</span>
                </>
              ) : (
                <span>No rating</span>
              )}

              <p>
                <FaRegCommentDots />
                {rest?.countReviews ? rest.countReviews : 0}
              </p>
            </div>
          </div>

          <div className={styles.btn_group}>
            <a href="#description" className={styles.button}>
              About
            </a>
            <a href="#menu" className={styles.button}>
              Menu
            </a>
            <a href="#reviews" className={styles.button}>
              Reviews
            </a>
          </div>

          <div className={styles.option_info}>
            <div className={styles.description} id="description">
              {rest?.description}
            </div>

            {rest?.Dishes ? <Menu menu={rest?.Dishes} /> : <span>No menu</span>}

            <div className={styles.reviews} id="reviews">
              <ProgressBar avgScore={rest?.avgScore} />
              {rest?.Reviews ? (
                <ReviewsList reviews={reviews} />
              ) : (
                <span>No reviews</span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.calendar}>
          <DatePicker />
        </div>
      </div>
    </CustomLayout>
  );
};
