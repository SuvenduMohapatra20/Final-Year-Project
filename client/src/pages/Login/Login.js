import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCode } from "react-icons/ai";

//CSS
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container-fluid loginDiv">
      <div className="headerSectionLogin">
        <Link className="logoView" to="/">
          <AiFillCode size={40} />
          <span>
            <b>Project</b>Ninja
          </span>
        </Link>
      </div>
      <div className="formSectionLogin">
        <div className="loginFormSection">
          <div className="loginFormHeaderSection">
            <h3 className="loginFormHeadText">Login to Your Account</h3>
            <p>Please Login and Select Profile to continue</p>
          </div>
          <form className="loginFormDataSection" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control customForm"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control customForm"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="forgetPasswordTxt">
              <p>Forgot password?</p>
            </div>
            <button className="customBtn loginButtonAccount" type="submit">
              Login
            </button>
          </form>
          <div className="dontAccountRegister">
            <p>Don’t have an account? <span onClick={handleRegisterClick}>Register</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
