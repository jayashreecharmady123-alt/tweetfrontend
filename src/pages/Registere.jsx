import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";


const Registere = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

    try {
      const res = await axios.post(
        "http://localhost:7000/api/register",
        form
      );

      alert("Registration Successful ✅");
      console.log(res.data);

      // ✅ CLEAR FORM AFTER SUCCESS
      setForm({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {
      console.error(error);
      alert("Registration Failed ❌");
    }
  };

  return (
  
      <div className="card">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn" onClick={() => navigate("/login")}>
            Register
          </button>

          <p className="ac"> Already have an account ? 
            <span className="log"  onClick={() => navigate("/login")}>
              Login
            </span></p>
          
        </form>
      </div>
    
  );
};

export default Registere;
