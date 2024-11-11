import { Button, Select } from 'antd';
import axios from 'axios';
import { useRef, useState } from 'react';
import styles from './CreateAdminForm.module.css';

const { Option } = Select;

export default function CreateRestForm({
  setRestaurant,
  handleCloseCreateForm,
}) {
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
        handleCloseCreateForm();
      }
    } catch (error) {
      console.log(error);
    }
  };

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

      <Select
        placeholder="CuisineId"
        onChange={(value) => setData((prev) => ({ ...prev, cuisineId: value }))}
        value={data.cuisineId}
        className={styles.selectField}
      >
        <Option value="1">Русская кухня</Option>
        <Option value="5">Международная кухня</Option>
      </Select>

      <Select
        placeholder="CityId"
        onChange={(value) => setData((prev) => ({ ...prev, cityId: value }))}
        value={data.cityId}
        className={styles.selectField}
      >
        <Option value="1">Москва</Option>
        <Option value="2">Санкт-Петербург</Option>
        <Option value="3">Сочи</Option>
        <Option value="4">Милан</Option>
        <Option value="5">Рома</Option>
        <Option value="6">Флоренция</Option>
        <Option value="7">Париж</Option>
        <Option value="8">Страсбург</Option>
        <Option value="9">Перпиньян</Option>
      </Select>

      <Select
        placeholder="TimetableId"
        onChange={(value) =>
          setData((prev) => ({ ...prev, timetableId: value }))
        }
        value={data.timetableId}
        className={styles.selectField}
      >
        <Option value="1">8:00 - 22:00</Option>
        <Option value="2">12:00 - 00:00</Option>
      </Select>

      <Button
        onClick={addHendler}
        type="button"
        className={styles.submitButton}
      >
        Tuch me, please
      </Button>
    </form>
  );
}
