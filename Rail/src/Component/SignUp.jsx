import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../form.css';

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });

      const result = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        alert(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error during signup, please try again.');
    }
  };

  return (
    <div className="form-wrapper">
      <motion.div
        className="signup-form-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Input */}
          <input
            className="signup-input"
            type="text"
            placeholder="Full Name"
            {...register('fullName', { required: 'Full Name is required' })}
          />
          {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
          
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: { 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                message: 'Invalid email address'
              },
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
          
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            {...register('password', { 
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
          
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
