import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    //firebase
  };

  const register = (e) => {
    e.preventDefault();
    //firebase
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-amazon-logo-png-transparent-background-2000-x-403-pixels-1.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and
          Privacy Notice. To keep your account secure, use this option only on
          your personal devices.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
