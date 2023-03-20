import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as OzaLogo } from "../../assets/icons/oza-logo.svg";
import InputField from "../../components/InputField/InputField";
import "./Signup.scss";

const Signup = () => {
  const [userData, setUserData] = useState({
    role: "user",
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    console.log(userData)
  }, [userData])

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/register", userData)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
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
            <h1>Sign up for Stride</h1>
            <p>Not signed up? <span>Register now</span></p>
          </div>
          <form className="signin-form">
            <div className="signin-input">
              <InputField label="Full Name" placeholder="Enter full name" value={userData.name} name="name" handleChange={handleChange}/>
            </div>
            <div className="signin-input">
              <InputField label="Email Address" placeholder="Enter email address" value={userData.email} name="email" handleChange={handleChange}/>
            </div>
            <div className="signin-input">
              <InputField label="Password" placeholder="Enter password" value={userData.password} name="password" handleChange={handleChange}/>
              <p>Forgot your password?</p>
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

export default Signup