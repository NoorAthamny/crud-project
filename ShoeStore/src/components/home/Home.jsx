import { Link } from "react-router";

import "./home.css";
import NavBar from "./../navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <form>
        <article>
          <section>
            <h1>Sign In</h1>
            <input type="Email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/shop">Sign In</Link>
            <p>
              Dont have an account! <span>Create Accout</span>
            </p>
          </section>
        </article>
      </form>
    </>
  );
};

export default Home;
