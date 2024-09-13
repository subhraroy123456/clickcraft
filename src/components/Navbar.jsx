import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/imgs/Logo.png";
import { Icon } from "@iconify/react";
import "./navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState("home");
  const [sidebar, setSidebar] = useState(false);
  const buttonRef = useRef(null);
  const sidebarRef = useRef(null);
  const handleNav = (el) => {
    setNav(el);
    setSidebar(false);
  };

  const [fixNav, setFixNav] = useState(false);
  useEffect(() => {
    const scrollFunc = (e) => {
      if (scrollY > 0) {
        setFixNav(true);
      } else {
        setFixNav(false);
      }
    };
    window.addEventListener("scroll", scrollFunc);
    return () => {
      removeEventListener("scroll", scrollFunc);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target) && !sidebarRef.current.contains(e.target)) {
        setSidebar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleBar = (e) => {
    setSidebar((prev) => !prev);
  };
  const handleTimes = (e) => {
    setSidebar((prev) => !prev);
  };
  return (
    <>
      <header
        className={`${fixNav ? "active" : ""} ${
          sidebar ? "activeSidebar" : ""
        }`}
      >
        <nav>
          <Container className="container-flex p-0">
            <div className="logo">
              <Link to="/" onClick={() => setNav("home")}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="menu" ref={sidebarRef}>
              <div className="times" onClick={handleTimes}>
                <Icon icon="prime:times" />
              </div>
              <ul className="list-unstyled p-0 m-0">
                <li onClick={() => handleNav("home")}>
                  <Link to="/" className={nav === "home" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li onClick={() => handleNav("about")}>
                  <Link to="/about" className={nav === "about" ? "active" : ""}>
                    About
                  </Link>
                </li>
                <li onClick={() => handleNav("portfolios")}>
                  <Link
                    to="/portfolio"
                    className={nav === "portfolios" ? "active" : ""}
                  >
                    Portfolios
                  </Link>
                </li>
                <li onClick={() => handleNav("community")}>
                  <Link
                    to="/community"
                    className={nav === "community" ? "active" : ""}
                  >
                    Community
                  </Link>
                </li>
                <li onClick={() => handleNav("contact")}>
                  <Link
                    to="/contact"
                    className={nav === "contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <div className="bars" onClick={handleBar} ref={buttonRef}>
                <Icon icon="f7:bars" />
              </div>
              <a href="" className="secondary-btnn-purple">
                sign in
              </a>
              <a href="" className="btnn">
                sign up
              </a>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
