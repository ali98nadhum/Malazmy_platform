import "./header.css";
import logo from "../../assets/logo.png";
import Container from "../../components/Container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [test, SetTest] = useState(false);
  return (
    <nav>
      <Container>
        <div className="nav_bar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="ul_list">
            <ul>
              <Link to={"/category"}>
                {" "}
                <li>الملازم</li>
              </Link>
              <li>شرح المواد</li>
              <Link to={"/about"}>
                {" "}
                <li>حول المنصه</li>
              </Link>
            </ul>
          </div>
          <label for="burger" class="burger">
            <input onClick={() => SetTest(!test)} id="burger" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </label>
          {test && (
            <div className="hamburger_menu">
              <ul>
                <Link to={"/category"}>
                  {" "}
                  <li>الملازم</li>
                </Link>
                <li>شرح المواد</li>
                <Link to={"/about"}>
                  {" "}
                  <li>حول المنصه</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Header;
