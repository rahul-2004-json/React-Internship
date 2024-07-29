import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <Link to={"/"}>Redux Shopping Cart</Link>
      </div>
      <div className="navbar-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </div>
  );
}
