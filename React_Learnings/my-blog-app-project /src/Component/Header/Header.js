import "./Header.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="header">
      <h1>MY BLOG APP</h1>
      <Link className="button_like_bg" to={`/`}>
        Home
      </Link>
    </header>
  );
};

export default Header;
