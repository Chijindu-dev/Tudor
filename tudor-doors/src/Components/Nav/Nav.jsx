import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.png";


function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu when route changes
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/team">Our Team</Link></li> 
          <li><Link to="/blog">Article</Link></li>
          {/* <li><Link to="/contact" className="nav-btn desktop-btn">
          Get in touch
        </Link>     </li>      */}
        </ul>

        {/* Desktop button */}
        <Link to="/contact" className="nav-btn desktop-btn">
          Get in touch
        </Link>

        {/* Hamburger menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Nav;
