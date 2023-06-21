import React, { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

//CSS
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.querySelector(".navbar-toggler").classList.toggle("rotate");
  };
  
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <AiFillCode size={40} />
        <span>
          <b>Project</b>Ninja
        </span>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        {isOpen ? <IoMdClose size={40} /> : <BiMenuAltRight size={40} />}
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/project">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link loginButton" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
