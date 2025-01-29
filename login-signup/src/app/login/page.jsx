'use client';

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./styles.css";

export default function LogIn() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(`http://localhost:4000/api/login/`, {
        email,
        password,
      });

      if (response.data.status === "success") {
        alert("Login successful");
        router.push('/dashboard'); // Redirect to dashboard
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-field">
            <input type="text" name="email" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" required />
            <label>Enter your password</label>
          </div>
          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Log In</button>
          <div className="register">
            <p>
              Don't have an account? <Link href="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}