import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Navigation.css';

function Navigation() {
  const currentPage = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
         Alfonso Balderas Torres
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav nav .nav">
            {navItems.map(({ path, label }) => (
              <li className="nav-item text-center" key={label}>
                <Link
                  to={path}
                  className={currentPage === path ? "nav-link active" : "nav-link"}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
