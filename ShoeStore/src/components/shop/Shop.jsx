import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchShoes } from "../../api";
import "./shop.css";
import NavBar from "../navbar/NavBar";

const Shop = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const getShoes = async () => {
      const data = await fetchShoes();
      setShoes(data);
      console.log(data);
    };

    getShoes();
  }, []);

  return (
    <>
      <NavBar />
      <article className="shopArt">
        {shoes.map((shoe) => (
          <section key={shoe.id} className="shopSec">
            <img src={shoe.image} alt={shoe.name} />
            <h2>{shoe.name}</h2>
            <h4>{shoe.price}₪</h4>
            <section>
              <Link to={`/product/${shoe.id}`}>View</Link>
              <Link to={`/update/${shoe.id}`}>Edit</Link>
            </section>
          </section>
        ))}
      </article>
    </>
  );
};

export default Shop;
