import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchShoeById, updateShoe } from "../../api";
import "./undate.css";
import NavBar from "../navbar/NavBar";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const getShoe = async () => {
      const data = await fetchShoeById(id);
      setFormData(data);
    };

    getShoe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateShoe(id, formData);
    navigate("/shop");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit} className="updateForm">
        <h2>Update Shoe</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;
