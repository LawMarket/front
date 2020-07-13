import React from "react";
import './Layout.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm d-flex justify-content-center">
     {/*  <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className=" justify-content-center">
        <ul className="navbar-nav nav-class">
          <li className="nav-item dropdown">
            <a  data-toggle="dropdown" href="#">
              דיני נזיקין
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              דיני משפחה
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              דיני עבודה
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              דיני תעבורה
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              מקרקעין נדל״ן
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              הוצאה לפועל
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
