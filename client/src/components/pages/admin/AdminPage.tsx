import React, { useEffect, useState } from "react";
import style from "./AdminPage.module.css";
import axios from "axios";
import CreateRestForm from "./CreateRestForm";
import UpdateRestForm from "./UpdateRestForm";

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
    <div>
      <button onClick={handleAddRestClick}>Add Rest</button>
      {showCreateForm && (
        <CreateRestForm setRestaurant={setRestaurant} onClose={handleCloseCreateForm} />
      )}
      {showUpdateForm && selectedRestaurant && (
        <UpdateRestForm
          setRestaurant={setRestaurant}
          onClose={handleCloseUpdateForm}
          restaurantData={selectedRestaurant}
        />
      )}
      {restaurant.map((rest) => (
        <div key={rest.id}>
          <p>{rest.name}</p>
          <button onClick={() => handleUpdateRestClick(rest)}>Update</button>
          <button onClick={() => deleteHandler(rest.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

