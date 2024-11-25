import { Link } from "react-router";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="div">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <img src="..\images\LOGO-WHITE-01.png" alt="logo" />
          <Link to="/shop">Shop</Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
