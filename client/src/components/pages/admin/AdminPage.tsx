import React, { useEffect, useState } from "react";
import style from "./AdminPage.module.css";
import axios from "axios";
import CreateRestForm from "./CreateRestForm";
import UpdateRestForm from "./UpdateRestForm";
import { CustomLayout } from "../../Layout/CustomLayout";

export default function AdminPage() {
  const [restaurant, setRestaurant] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/admin`, {
        withCredentials: true,
      })
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleAddRestClick = () => {
    setShowCreateForm(true);
  };

  const handleCloseCreateForm = () => {
    setShowCreateForm(false);
  };

  const handleUpdateRestClick = (restaurantData) => {
    setSelectedRestaurant(restaurantData);
    setShowUpdateForm(true);
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedRestaurant(null);
  };

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/admin?id=${id}`
      );
      if (response.status === 200) {
        setRestaurant((prev) => prev.filter((el) => el.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomLayout className={style.admin_page}>
      <button onClick={handleAddRestClick} className={style.btn__add__rest}>
        Add Rest
      </button>
      {showCreateForm && (
        <CreateRestForm
          setRestaurant={setRestaurant}
          onClose={handleCloseCreateForm}
        />
      )}
      {showUpdateForm && selectedRestaurant && (
        <UpdateRestForm
          setRestaurant={setRestaurant}
          onClose={handleCloseUpdateForm}
          restaurantData={selectedRestaurant}
        />
      )}
      {restaurant.map((rest) => (
        <div className={style.card__rest} key={rest.id}>
          <p className={style.card__name}>{rest.name}</p>
          <button
            onClick={() => handleUpdateRestClick(rest)}
            className={style.btn__update}
          >
            Update
          </button>
          <button
            onClick={() => deleteHandler(rest.id)}
            className={style.btn__delete}
          >
            Delete
          </button>
        </div>
      ))}
    </CustomLayout>
  );
}
