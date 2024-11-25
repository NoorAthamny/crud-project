import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchShoeById } from "../../api";
import "./product.css";
import NavBar from "../navbar/NavBar";

const Product = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    const getShoe = async () => {
      const data = await fetchShoeById(id);
      setShoe(data);
    };

    getShoe();
  }, [id]);

  if (!shoe) return <p>Loading...</p>;

  return (
    <>
      <NavBar />
      <main>
        <article className="productSec">
          <section className="productImg">
            <img src={shoe.image} alt={shoe.name} />
          </section>
          <section className="productText">
            <h1>{shoe.name}</h1>
            <p>{shoe.description}</p>
            <p>
              <span>{shoe.price}₪</span> Available On Stock
            </p>
            <figure className="productBtn">
              <Link to="#">ADD TO CART</Link>
              <Link to={`/update/${id}`}>Edit</Link>
            </figure>
          </section>
        </article>
      </main>
    </>
  );
};

export default Product;
