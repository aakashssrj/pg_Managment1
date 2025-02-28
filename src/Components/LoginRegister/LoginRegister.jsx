import React from 'react'
import "./LoginRegister.css"

const LoginRegister = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2>Login</h2>
          <form id="loginForm">
            <label htmlFor="loginUsername">Username</label>
            <input type="text" id="loginUsername" placeholder="Enter your username" required />

            <label htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>
        </div>

        <div className="form-container">
          <h2>Sign Up</h2>
          <form id="signupForm">
            <label htmlFor="signupUsername">Username</label>
            <input type="text" id="signupUsername" placeholder="Choose a username" required />

            <label htmlFor="signupEmail">Email</label>
            <input type="email" id="signupEmail" placeholder="Enter your email" required />

            <label htmlFor="signupPassword">Password</label>
            <input type="password" id="signupPassword" placeholder="Create a password" required />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginRegister;