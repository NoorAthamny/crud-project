import { Link } from "react-router";
import NavBar from "../navbar/NavBar";
import "./product.css";

const Product = () => {
  return (
    <>
      <NavBar />
      <main>
        <article className="productSec">
          <section className="productImg">
            <img
              src="https://m.media-amazon.com/images/I/71LYHO3+wnL._AC_SL1356_.jpg"
              alt=""
            />
          </section>
          <section className="productText">
            <h1>Shure Sm7b</h1>
            <p>
              Shure SM7B Microphone - Vocal Dynamic Studio Mic for Broadcast,
              Podcast, Recording, Gaming & Streaming, XLR, Rugged Construction,
              Detachable Windscreen, Smooth Sound, Warm Vocals, Wide-Range
              Frequency
            </p>
            <p>
              <span>1350₪</span> Available On Stock
            </p>
            <figure className="productBtn">
              <Link>ADD TO CART</Link>
              <Link>Edit</Link>
            </figure>
          </section>
        </article>
      </main>
    </>
  );
};

export default Product;
