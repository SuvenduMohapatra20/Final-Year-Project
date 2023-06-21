import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCode } from "react-icons/ai";
//CSS
import "./Register.css";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submission logic here

    // Perform form validation
    if (!termsAccepted) {
      setFormError("Please accept the terms and conditions");
      return;
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="container-fluid registerSectionDiv">
      <div className="headerSectionRegister">
        <Link className="logoView" to="/">
          <AiFillCode size={40} />
          <span>
            <b>Project</b>Ninja
          </span>
        </Link>
      </div>
      <div className="formSectionRegister">
        <div className="registerFormSection">
          <div className="registerFormHeaderSection">
            <h3 className="registerFormHeadText">Create Your Account</h3>
            <p>Please Sign up and Select Profile to continue</p>
          </div>
          <form className="registerForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control customForm"
                placeholder="Full Name"
                type="text"
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control customForm"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control customForm"
                placeholder="College Name"
                type="text"
                id="collegeName"
                value={collegeName}
                onChange={(event) => setCollegeName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control customForm"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control customForm"
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <div className="checkBoxDiv">
              <input
                className="chkBox"
                type="checkbox"
                id="termsAccepted"
                checked={termsAccepted}
                onChange={(event) => setTermsAccepted(event.target.checked)}
              />
              <label htmlFor="termsAccepted">
                I accept the terms and conditions
              </label>
            </div>
            <button className="customBtn registerButton" type="submit">
              Register
            </button>
          </form>
          <div className="haveAccountLogin">
            <p>Already have an account? <span onClick={handleLoginClick}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
