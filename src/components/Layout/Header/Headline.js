import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import Lawyer from "../../Lawyers/Lawyer";

const Headline = ({ auth: { isAuthenticated, loading, admin, lawyer }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav" style={{ display: "contents" }}>
      <li className="nav-item">
        <Link className="nav-link" to="lawyerlist">
          עורכי דין
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">איזור אישי</span>
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">התנתק</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="lawyerlist">
          עורכי דין
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link" href="#">
          התחבר
        </Link>
      </li>
    </ul>
  );

  const adminLinks = (
    <ul className="navbar-nav" style={{ display: "contents" }}>
      <li className="nav-item">
        <Link className="nav-link" to="lawyerlist">
          עורכי דין
        </Link>
      </li>
      <li>
        <Link to="/userslist">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">משתמשים</span>
        </Link>
      </li>
      <li>
        <Link to="/lawyerregiester">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">הוסף עו״ד</span>
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">התנתק</span>
        </a>
      </li>
    </ul>
  );

  const lawyerLinks = (
    <ul className="navbar-nav" style={{ display: "contents" }}>
      <li>
        <Link to="/userslist">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">משתמשים</span>
        </Link>
      </li>

      <li className="nav-item">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">התנתק</span>
        </a>
      </li>
    </ul>
  );



  return (
    <div>
      <nav
        className="navbar navbar-expand-sm "
        dir="ltr"
        style={{ backgroundColor: "#e9ecef", alignItems: "baseline" }}
      >
        {!admin ? (
          <Link to="/" className="navbar-brand">
            <p>
              LAW<b>MARKET</b>
            </p>
          </Link>
        ) : (
          <p>
            {" "}
            <b>ADMIN PANEL L-M</b>
          </p>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
          style={{ justifyContent: "flex-end" }}
        >
          {admin ? adminLinks : 
          lawyer ? lawyerLinks :
          isAuthenticated ? authLinks : guestLinks }
          
        </div>
      </nav>
      {!admin ? (
        <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
          <h1>עורכי הדין הטובים בתחום במקום אחד</h1>
          <div className="input-group" style={{ flexDirection: "row-reverse" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search this blog"
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Headline);

{
  /*
    <div
  className="input-group col-md-8"
  style={{ flexDirection: "row-reverse" }}
  >
  <input
    className="form-control py-2"
    type="search"
    placeholder="search"
    id="example-search-input"
  />
  <span className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">
      <i className="fa fa-search"></i>
    </button>
  </span>
  </div>
  */
}
