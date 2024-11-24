import { Link } from "react-router";
import NavBar from "../navbar/NavBar";
import "./shop.css";
const Shop = () => {
  return (
    <>
      <NavBar />
      <article className="shopArt">
        <section className="shopSec">
          <img
            src="https://m.media-amazon.com/images/I/71LYHO3+wnL._AC_SL1356_.jpg"
            alt=""
          />
          <h2>SHURE SM7B</h2>
          <h4>1350$</h4>
          <section>
            <Link to="/product">View</Link>
            <Link to="/update">Edit</Link>
          </section>
        </section>
      </article>
    </>
  );
};

export default Shop;
