import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from '../../actions/alert'
import { register} from '../../actions/auth';

import { connect } from "react-redux";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2, phoneNumber } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('the password dosnt matched', 'danger' , 5000);
    } else {
      register(formData);
    } 
    }

  if (isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <div class="container">
      <form class="row justify-content-center mb-5 mt-4" onSubmit={e =>onSubmit(e)}>
        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
          <div class="row">
            <div class="col text-center">
              <h1>הרשמה</h1>
              <p class="text-h3">
                הצטרף למאגר עורכי הדין הגדול בארץ, עורכי דין מכל התחומים ובכל
                זמן
              </p>
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                type="text"
                placeholder="שם פרטי"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
            <div class="col">
              <input
                type="text"
                placeholder="שם משפחה"
                name="lastName"
                value={lastName}
                onChange={(e) => onChange(e)}
                className="form-control"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                placeholder='כתובת הדוא"ל'
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control"
                type="email"
                className="form-control"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                placeholder="מספר טלפון"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => onChange(e)}
                className="form-control"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                placeholder="הזן סיסמא"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div class="col">
              <input
                type="password"
                placeholder="חזור על הסיסמא"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
                class="form-control"
              />
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col">
              <button
              type="submit"
                class="btn btn-primary mt-4 d-block"
                style={{ backgroundColor: " #08b9e3", borderColor: " #08b9e3" }}
              >
                הירשם
              </button>
              <p className="my-1">
              יש לך חשבון ? <Link to="/register">התחבר</Link>
            </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
