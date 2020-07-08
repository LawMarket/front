import React from "react";

const Headline = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm " dir="ltr" style={{backgroundColor: '#e9ecef'}}>
      <a className="navbar-brand" href="#">
        LawMarket
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{justifyContent: 'flex-end'}}>
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="#">
            צור קשר
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              התחבר
            </a>
          </li>
        </ul>
      </div>
    </nav>
      <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
        <h1>עורכי הדין הטובים בתחום במקום אחד</h1>
        <div className="input-group" style={{flexDirection: 'row-reverse'}}>
          <input type="text" className="form-control" placeholder="Search this blog"/>
          <div className="input-group-append" >
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
          {/*
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
          */}
      </div>
    </div>
  );
};

export default Headline;
