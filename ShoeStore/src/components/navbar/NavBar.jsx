import { Link } from "react-router";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="div">
      <nav>
        <ul>
          <Link to="/">Home</Link>

          <img src="images\adible-logo.png" alt="" />
          <Link to="/shop">Shop</Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
