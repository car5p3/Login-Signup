'use client';

import React from "react";
import "./styles.css";
import Link from "next/link";
import axios from "axios";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/api/register/`, {
        username,
        email,
        password,
      });

      if (response.data.status === "success") {
        alert("Registration successful");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred during registration");
      console.error('Error response:', error.response);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="input-field">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className="input-field">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className="input-field">
            <input type="password" name="repeatPassword" required />
            <label>Repeat Password</label>
          </div>
          <button type="submit">Register</button>
          <div className="register">
            <p>
              Already Registered? <Link href="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
