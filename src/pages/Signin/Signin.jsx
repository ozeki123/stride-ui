import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../../components/InputField/InputField";
import { ReactComponent as OzaLogo } from "../../assets/icons/oza-logo.svg";
import { ReactComponent as AlertIcon } from "../../assets/icons/alert-icon.svg";
import "./Signin.scss";

const Signin = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const [errorFlag, setErrorFlag] = useState(false);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    console.log(errorFlag)
  }, [errorFlag])

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/login", userData)
      .then((res) => {
        console.log(res);
        navigate("/dashboard")
      })
      .catch(err => {
        console.log(err);
        setErrorFlag(true);
      })
  }

  return (
    <div className="signin-container">
      <section className="signin-section">
        <div className="signin-wrapper">
          <div className="signin-logo">
            <OzaLogo />
            <h3>Stride</h3>
          </div>
          <div className="signin-header">
            <h1>Sign in to oza</h1>
            <p>Not signed up? <span>Register now</span></p>
          </div> 
          <form className="signin-form">
            <div className="signin-input">
              <InputField label="Email Address" placeholder="Enter email address" value={userData.email} name="email" handleChange={handleChange}/>
            </div>
            <div className="signin-input">
              <InputField label="Password" placeholder="Enter password" value={userData.password} name="password" handleChange={handleChange}/>
              <div className={errorFlag ? "signin-error" : "signin-error display"}>
                <AlertIcon />
                <p>{errorFlag ? "Incorrect email address or passowrd" : ""}</p>
              </div>
              <p className="signin-help">Forgot your password?</p>
            </div>
            <button onClick={handleSubmit}>Sign In</button>
          </form>
        </div>
      </section>
      <section className="banner-section">
        <div className="banner-image">
          <div className="banner-logo">
            <OzaLogo />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signin