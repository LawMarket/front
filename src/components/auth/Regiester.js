import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2, tel } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      //setAlert('the password dosnt matched', 'danger' , 5000);
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        tel,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);

        //const res = await axios.post('/api/users',body,config);
        //console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <div class="container">
      <form class="row justify-content-center mb-5 mt-4">
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
                name="tel"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control"
                type="tel"
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
                class="btn btn-primary mt-4 d-block"
                style={{ backgroundColor: " #08b9e3", borderColor: " #08b9e3" }}
              >
                הירשם
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
