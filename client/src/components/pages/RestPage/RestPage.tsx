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

interface IRestPageProps {
  rest: IRestaurant;
}

type responseData = {
  rests: IRestaurant[];
  reviews: IReview[];
};

export const RestPage: FC = () => {
  const [rest, setRest] = useState<IRestaurant>();
  const [reviews, setReviews] = useState<IReview[]>();
  const { id } = useParams();

  const fetchRestData = async (): Promise<void> => {
    try {
      const response = await axios.get<responseData>(
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
            <HeartOutlined className={styles.icon} />
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
            <Button className={styles.button} type="text">
              About
            </Button>
            <Button className={styles.button} type="text">
              Menu
            </Button>
            <Button className={styles.button} type="text">
              Reviews
            </Button>
          </div>

          <div className={styles.option_info}>
            <div className={styles.description}>
              Executing (default): SELECT "Restaurant"."id",
              "Restaurant"."name", "Restaurant"."description",
              "Restaurant"."address", "Restaurant"."images",
              "Restaurant"."cuisineId", "Restaurant"."cityId",
              "Restaurant"."timetableId", "Restaurant"."createdAt",
              "Restaurant"."updatedAt", "Dishes"."id" AS "Dishes.id",
              "Dishes"."name" AS "Dishes.name", "Dishes"."price" AS
              "Dishes.price", "Dishes"."categoryId" AS "Dishes.categoryId",
              "Dishes"."restId" AS "Dishes.restId", "Dishes"."createdAt" AS
              "Dishes.createdAt", "Dishes"."updatedAt" AS "Dishes.updatedAt",
              "Cuisine"."id" AS "Cuisine.id", "Cuisine"."name" AS
              "Cuisine.name", "Cuisine"."createdAt" AS "Cuisine.createdAt",
              "Cuisine"."updatedAt" AS "Cuisine.updatedAt" FROM "Restaurants" AS
              "Restaurant" LEFT OUTER JOIN "Dishes" AS "Dishes" ON
              "Restaurant"."id" = "Dishes"."restId" LEFT OUTER JOIN "Cuisines"
              AS "Cuisine" ON "Restaurant"."cuisineId" = "Cuisine"."id" WHERE
              "Restaurant"."id" = '1';
            </div>

            {rest?.Dishes ? <Menu menu={rest?.Dishes} /> : <span>No menu</span>}

            {/* reviews here */}
            <div className={styles.reviews}>
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
