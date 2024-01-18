import { useState, useRef } from 'react';
import styles from './CreateAdminForm.module.css';
import axios from 'axios';
import client from '../../../http/client';

export default function CreateRestForm({ setRestaurant }) {
  const [data, setData] = useState({
    name: '',
    description: '',
    address: '',
    images: null,
    cuisineId: '',
    cityId: '',
    timetableId: '',
  });

  const fileInputRef = useRef();

  const chengeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fileChangeHandler = (e) => {
    setData((prev) => ({ ...prev, images: e.target.files }));
  };

  const addHendler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('address', data.address);
      formData.append('cuisineId', data.cuisineId);
      formData.append('cityId', data.cityId);
      formData.append('timetableId', data.timetableId);

      for (let i = 0; i < data.images.length; i++) {
        formData.append('images', data.images[i]);
      }

      const res = await axios.post(
        'http://localhost:3000/api/admin',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (res.status === 200) {
        setRestaurant((prev) => [...prev, res.data]);
        setData({
          name: '',
          description: '',
          address: '',
          images: null,
          cuisineId: '',
          cityId: '',
          timetableId: '',
        });
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await client.get('/admin/additional');

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <form className={styles.createRestForm}>
      <input
        placeholder="Name"
        onChange={chengeHandler}
        type="text"
        name="name"
        value={data.name}
        className={styles.inputField}
      />

      <input
        placeholder="Description"
        onChange={chengeHandler}
        type="text"
        name="description"
        value={data.description}
        className={styles.inputField}
      />
      <input
        placeholder="Address"
        onChange={chengeHandler}
        type="text"
        name="address"
        value={data.address}
        className={styles.inputField}
      />
      <input
        type="file"
        accept="image/*"
        onChange={fileChangeHandler}
        ref={fileInputRef}
        className={styles.inputField}
        multiple
      />
      <input
        placeholder="CuisineId"
        onChange={chengeHandler}
        type="text"
        name="cuisineId"
        value={data.cuisineId}
        className={styles.inputField}
      />
      <input
        placeholder="CityId"
        onChange={chengeHandler}
        type="text"
        name="cityId"
        value={data.cityId}
        className={styles.inputField}
      />
      <input
        placeholder="TimetableId"
        onChange={chengeHandler}
        type="text"
        name="timetableId"
        value={data.timetableId}
        className={styles.inputField}
      />

      <button
        onClick={addHendler}
        type="button"
        className={styles.submitButton}
      >
        Tuch me, please
      </button>
    </form>
  );
}
