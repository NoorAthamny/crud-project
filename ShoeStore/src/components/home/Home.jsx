import { Link } from "react-router";
import NavBar from "../navbar/NavBar";
import "./home.css";

const Home = () => {
  return (
    <main>
      <NavBar />
      <form>
        <article>
          <section>
            <h1>Sign In</h1>
            <input type="Email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link>Sign In</Link>
            <p>
              Dont have an account! <span>Create Accout</span>
            </p>
          </section>
        </article>
      </form>
    </main>
  );
};

export default Home;
