import React from 'react';
import { motion } from 'framer-motion';
import '../form.css';

const Signup = () => {
  return (
    <div className="form-wrapper">
      <motion.div
        className="signup-form-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="signup-title">Sign Up</h2>
        <form>
          <input className="signup-input" type="text" placeholder="Full Name" required />
          <input className="signup-input" type="email" placeholder="Email" required />
          <input className="signup-input" type="password" placeholder="Password" required />
          <button className="signup-button" type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
