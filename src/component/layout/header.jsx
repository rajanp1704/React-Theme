import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const phoneNumber = "+12 34567890";
const address = "Barcelona";

let socialList = [
  {
    iconName: "icofont-facebook-messenger",
    siteLink: "#",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-youtube",
    siteLink: "#",
  },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}
    >
      <div className={`header-top ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {address}
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li></li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/01.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/course">Training</NavLink>
                  </li>
                  <li>
                    <NavLink to="/donors">Sponsors</NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">Team</NavLink>
                  </li>
                  <li>
                    <NavLink to="/instructor">Instructor</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <Link to="/form" className="signup">
                <i className="icofont-users"></i> <span>Addmission</span>{" "}
              </Link>

              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
