import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: false
  });

  const { email, password, userType } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };



  return (
    <Fragment>
      <div class="container">
        <div class="row justify-content-center mb-5 mt-4">
          <div class="col-12 col-md-8 col-lg-8 col-xl-6">
            <h1 className="text-center">התחבר</h1>
            
            <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div class="col align-items-center mt-4">
              <div class="col p-3">
                <input
                type="email"
                placeholder="כתובת דוא״ל"
                name="email"
                //value={email}
                onChange={e => onChange(e)}
                className="form-control"
                />
              </div>
              <div class="col p-3">
                <input
                  type="password"
                  placeholder="סיסמא"
                  name="password"
                  //value={password}
                  onChange={e => onChange(e)}
                  className="form-control"
                />
              </div>
            </div>
                <div class="form-check text-right mr-4">
                  <label class="form-check-label pr-2">
                  </label>
                    <input type="checkbox" name="userType" onChange={e => onChange(e)}/> אני עו״ד
                </div> 

              <input type="submit" className="btn btn-primary mt-4 d-block mr-4" value="התחבר" style={{backgroundColor:' #08b9e3',borderColor:' #08b9e3'}}/>
            </form>
            <p className="my-1">
              עדיין אין לך חשבון? <Link to="/register">הירשם</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
