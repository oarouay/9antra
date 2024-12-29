import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import '../styles/NavBar.css';
import logo from '../assets/LogoBridge.png';

function NavBar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img className="logo" src={logo} alt="Logo" />
      <div>
        <nav ref={navRef}>
          {/* Use HashLink instead of <a> */}
          <HashLink smooth to="#home">Home</HashLink>
          <HashLink smooth to="#courses">Courses</HashLink>
          <HashLink smooth to="#contact">Contact Us</HashLink>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
