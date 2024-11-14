import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../form.css';


const Login = () => {
  const move = useNavigate();

  const handlelogin = () => {
    move('/firstpage');
  };
  return (
    <div className="form-wrapper">
      <motion.div
        className="login-form-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="login-title">Login</h2>
        <form>
          <input className="login-input" type="email" placeholder="Email" required />
          <input className="login-input" type="password" placeholder="Password" required />
          <button className="login-button" type="submit" onClick={handlelogin}>Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
