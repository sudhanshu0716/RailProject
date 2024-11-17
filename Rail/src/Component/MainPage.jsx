import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mainpage.css';

const MainPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  const handleContactUsClick=()=>{
    navigate('/contact');
  };


  const [showFirstTagline, setShowFirstTagline] = React.useState(true);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setShowFirstTagline((prevState) => !prevState);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-page">
      <div className="background-image"></div>

      <div className="header">
        <h1 className="logo">Rail Journey Mate
          <div>
            <h1 className="tag-2">Your Ultimate Rail Travel Companion</h1>
          </div>
        </h1>
        <div className="header-buttons">
          <button className="main-button login-btn" onClick={handleLoginClick}>Login</button>
          <button className="main-button lost-found-btn" onClick={handleContactUsClick}>Contact Us</button>
        </div>
      </div>

      <div className="content">
        <div className={`main-tagline ${showFirstTagline ? 'show-first-tagline' : 'show-second-tagline'}`}>
          {showFirstTagline ? (
            <>
              <div>Experience</div>
              <div>the wonder of</div>
              <div>rail journey</div>
            </>
          ) : (
            <>
              <div>Crush the Rush</div>
              <div>Unreserved,</div>
              <div>Uncrowded</div>
            </>
          )}
        </div>
        <button className="get-started-button-main" onClick={handleGetStartedClick}>Get Started</button>
      </div>

      <div className="mpfooter"><marquee behavior="scroll" direction="" scrollamount="20">RAIL JOURNEY MATE: YOUR ULTIMATE RAIL TRAVEL COMPANION || EXPLORE INDIA,TRACK AT A TIME!!</marquee></div>
    </div>
  );
};

export default MainPage;
