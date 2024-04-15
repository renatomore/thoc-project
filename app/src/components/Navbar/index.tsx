import { Icon, Link } from "../../../styled-system/components";
import Avatar from "../../assets/images/Navbar/avatar.svg";
import ThocLogo from "../../assets/thoc.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className="logo" src={ThocLogo} alt="Thoc Logo" />
      <Link className="nav-link">SALE</Link>
      <Link className="nav-link">SHOP</Link>
      <hr className="divider" />
      <Link className="nav-link">COMMUNITY</Link>
      <div style={{ width: "50%" }} />
      <Icon
        className="search-icon"
        icon="Search"
        width="37px"
        color="#032700"
      />
      <Icon
        className="cart-icon"
        icon="ShoppingCart"
        width="30px"
        color="#032700"
      />
      <img
        className="avatar"
        src={Avatar}
        alt="Avatar"
        height="54px"
        width="56px"
      />
    </div>
  );
};

export default Navbar;
