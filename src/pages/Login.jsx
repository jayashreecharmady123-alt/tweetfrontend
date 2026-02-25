import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {
  e.preventDefault();

    try 
    {
       const res = await axios.post("http://localhost:7000/api/login",form)

       if (res.data.success) 
      {    
          
         alert(res.data.message)
         localStorage.setItem("token", res.data.token);
         navigate("/profile")
       } 

       else
      {
           alert(res.data.message)
      }
    } 
    
    catch (error)
     {
       console.log(error)
       alert("Login failed")
    }


   }
  

  return (
    
      <div className="card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Login
          </button>
          
          <p className="ac"> Don't have an account ? 
            <span className="log"  onClick={() => navigate("/")}>
              Registere
            </span></p>
        </form>
      </div>
   
  );
};

export default Login;
